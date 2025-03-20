'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './DanceGame.module.css';

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 400;
const GROUND_HEIGHT = 0;
const DANCER_WIDTH = 100;
const DANCER_HEIGHT = 200;
const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 50;
const GRAVITY = 1500; 
const JUMP_FORCE = -700; 
const GAME_SPEED = 400; 
const TERMINAL_VELOCITY = 800; 

export default function DanceGame() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { theme } = useTheme();

  const dancerImageRef = useRef(null);
  // Track mouse position for button interaction
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/game/dancer.svg';
    dancerImageRef.current = img;
  }, []);

  const gameStateRef = useRef({
    dancerY: 0,
    dancerVelocity: 0,
    isJumping: false,
    block: { x: 0 },
    lastTimestamp: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const groundY = CANVAS_HEIGHT - GROUND_HEIGHT;
    gameStateRef.current.dancerY = groundY - DANCER_HEIGHT;

    function drawDancer() {
      if (dancerImageRef.current) {
        ctx.drawImage(dancerImageRef.current, 50, gameStateRef.current.dancerY, DANCER_WIDTH, DANCER_HEIGHT);
      }
    }

    function drawGround() {
      ctx.fillStyle = '#D66969';
      ctx.fillRect(0, groundY, CANVAS_WIDTH, 2);
    }

    function drawBlock(x) {
      ctx.fillStyle = '#D66969';
      ctx.fillRect(x, groundY - BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
    }

    function drawScore() {
      ctx.fillStyle = '#D66969';
      ctx.font = 'bold 24px Montserrat';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}`, 20, 40);
      ctx.fillText(`High Score: ${highScore}`, 20, 80);
    }

    function drawStartButton() {
      const buttonWidth = 200;
      const buttonHeight = 60;
      const buttonX = (CANVAS_WIDTH - buttonWidth) / 2;
      const buttonY = (CANVAS_HEIGHT - buttonHeight) / 2;
      
      // Calculate if mouse is over button
      const isMouseOverButton = 
        mousePos.x >= buttonX && 
        mousePos.x <= buttonX + buttonWidth &&
        mousePos.y >= buttonY && 
        mousePos.y <= buttonY + buttonHeight;
      
      // Button background
      ctx.fillStyle = '#D66969';
      ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
      
      // Button text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 24px Montserrat';
      ctx.textAlign = 'center';
      ctx.fillText('Start Game', CANVAS_WIDTH / 2, buttonY + buttonHeight / 2 + 8);
      
      // Check if mouse is over button and clicked
      if (isMouseOverButton && isMouseDown) {
        startGame();
        setIsMouseDown(false);
      }
    }

    function drawPlayAgainButton() {
      const buttonWidth = 200;
      const buttonHeight = 60;
      const buttonX = (CANVAS_WIDTH - buttonWidth) / 2;
      const buttonY = (CANVAS_HEIGHT - buttonHeight) / 2 + 120;
      
      // Calculate if mouse is over button
      const isMouseOverButton = 
        mousePos.x >= buttonX && 
        mousePos.x <= buttonX + buttonWidth &&
        mousePos.y >= buttonY && 
        mousePos.y <= buttonY + buttonHeight;
      
      // Button background - always use the same color regardless of hover state in game over
      ctx.fillStyle = '#D66969';
      ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
      
      // Button text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 24px Montserrat';
      ctx.textAlign = 'center';
      ctx.fillText('Play Again', CANVAS_WIDTH / 2, buttonY + buttonHeight / 2 + 8);
      
      // Check if mouse is over button and clicked
      if (isMouseOverButton && isMouseDown) {
        startGame();
        setIsMouseDown(false);
      }
    }

    function checkCollision(dancerY, blockX) {
      const dancerX = 50;
      const dancerRight = dancerX + DANCER_WIDTH;
      const dancerBottom = dancerY + DANCER_HEIGHT;
      const blockRight = blockX + BLOCK_WIDTH;
      const blockTop = groundY - BLOCK_HEIGHT;
      return dancerRight > blockX && dancerX < blockRight && dancerBottom > blockTop;
    }

    function gameLoop(timestamp) {
      if (!gameStarted || gameOver) return;

      if (!gameStateRef.current.lastTimestamp) {
        gameStateRef.current.lastTimestamp = timestamp;
      }
      const deltaTime = timestamp - gameStateRef.current.lastTimestamp;
      const timeScale = deltaTime / 1000;
      gameStateRef.current.lastTimestamp = timestamp;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      if (gameStateRef.current.isJumping) {
        gameStateRef.current.dancerVelocity += GRAVITY * timeScale;
        if (gameStateRef.current.dancerVelocity > TERMINAL_VELOCITY) {
          gameStateRef.current.dancerVelocity = TERMINAL_VELOCITY;
        }
        gameStateRef.current.dancerY += gameStateRef.current.dancerVelocity * timeScale;

        if (gameStateRef.current.dancerY >= groundY - DANCER_HEIGHT) {
          gameStateRef.current.dancerY = groundY - DANCER_HEIGHT;
          gameStateRef.current.dancerVelocity = 0;
          gameStateRef.current.isJumping = false;
        }
      }

      const block = gameStateRef.current.block;
      block.x -= GAME_SPEED * timeScale;

      if (checkCollision(gameStateRef.current.dancerY, block.x)) {
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        
        // Draw final state before game over screen appears
        drawGround();
        drawBlock(block.x);
        drawDancer();
        drawScore();
        
        // Draw game over screen on canvas
        drawGameOverScreen();
        return;
      }

      if (block.x + BLOCK_WIDTH < 0) {
        setScore((prev) => prev + 1);
        block.x = CANVAS_WIDTH + 200 + Math.random() * 200;
      }

      drawGround();
      drawBlock(block.x);
      drawDancer();
      drawScore();

      if (!gameOver) {
        requestAnimationFrame(gameLoop);
      }
    }
    
    function drawGameOverScreen() {
      // Add semi-transparent overlay
      ctx.fillStyle = '#d6696939';
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      
      // Game Over text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Bona Nova';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 50);
      
      // Score display
      ctx.font = '24px Montserrat';
      ctx.fillText(`Score: ${score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
      ctx.fillText(`High Score: ${highScore}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40);
      
      // Draw Play Again button
      drawPlayAgainButton();
    }

    function handleKeyDown(e) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameOver) {
          startGame();
        } else if (!gameStateRef.current.isJumping) {
          jump();
        }
      }
    }

    function handleTouch(e) {
      e.preventDefault();
      if (gameOver) {
        startGame();
      } else if (!gameStateRef.current.isJumping) {
        jump();
      }
    }

    function jump() {
      gameStateRef.current.isJumping = true;
      gameStateRef.current.dancerVelocity = JUMP_FORCE;
    }

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleTouch);

    // Draw appropriate screen based on game state
    if (!gameStarted) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawGround();
      drawDancer();
      drawScore();
      drawStartButton();
    } else if (gameStarted && !gameOver) {
      requestAnimationFrame(gameLoop);
    } else if (gameOver) {
      // Draw final state
      drawGround();
      const block = gameStateRef.current.block;
      drawBlock(block.x);
      drawDancer();
      drawScore();
      
      // Draw game over screen
      drawGameOverScreen();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('touchstart', handleTouch);
    };
  }, [gameStarted, gameOver, score, highScore, theme, mousePos, isMouseDown]);

  function startGame() {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    gameStateRef.current = {
      dancerY: CANVAS_HEIGHT - GROUND_HEIGHT - DANCER_HEIGHT,
      dancerVelocity: 0,
      isJumping: false,
      block: { x: CANVAS_WIDTH + 100 },
      lastTimestamp: 0,
    };
  }

  // Handle mouse events for button interaction
  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  return (
    <div className={styles.gameContainer}>
      <canvas 
        ref={canvasRef} 
        width={CANVAS_WIDTH} 
        height={CANVAS_HEIGHT} 
        className={styles.gameArea}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <p className={styles.howToPlay}>
        {gameOver ? 'Press SPACE or UP ARROW to try again' : 'Press SPACE or UP ARROW to jump'}
      </p>
    </div>
  );
}