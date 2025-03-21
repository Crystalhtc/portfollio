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
const SCORES_PER_SESSION = 3;
const TOTAL_SESSIONS = 5;

export default function DanceGame() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  const [sessionPaused, setSessionPaused] = useState(false);
  const { theme } = useTheme();

  const dancerImageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const scoreRef = useRef(0);
  const sessionScoreRef = useRef(0);
  const gameStateRef = useRef({
    dancerY: 0,
    dancerVelocity: 0,
    isJumping: false,
    block: { x: 0 },
    lastTimestamp: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.src = '/game/dancer.svg';
    img.onload = () => {
      dancerImageRef.current = img;
    };
  }, []);

  const danceFacts = [
    "I've won all three types of medals (gold, silver, and bronze) at the Asian Grand Prix, an international ballet competition 🥇🥈🥉",
    "I know four languages—English, Cantonese, Mandarin, and Japanese! Right now, I'm levelling up my Japanese by watching J-dramas ‍💻",
    "I studied Geography at University, and wrote a thesis about how waterfront promenade affect people's mental health 🧠",
    "I love drinking tea, especially matcha! Need them everyday 🍵",
    "My favourite anime is Haikyuu, and my favourite character from the show is Oikawa Tooru 🏐"
  ];

  const drawDancer = (ctx) => {
    if (dancerImageRef.current) {
      ctx.drawImage(dancerImageRef.current, 50, gameStateRef.current.dancerY, DANCER_WIDTH, DANCER_HEIGHT);
    } else {
      ctx.fillStyle = 'blue';
      ctx.fillRect(50, gameStateRef.current.dancerY, DANCER_WIDTH, DANCER_HEIGHT);
    }
  };

  const drawGround = (ctx, groundY) => {
    ctx.fillStyle = '#D66969';
    ctx.fillRect(0, groundY, CANVAS_WIDTH, 2);
  };

  const drawStartScreen = (ctx) => {
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    ctx.fillStyle = '#D66969';
    ctx.font = 'bold 40px Bona Nova';
    ctx.textAlign = 'center';
    ctx.fillText('Dance with Me', centerX, centerY - 100);
    ctx.font = 'bold 20px Montserrat';
    ctx.fillText('Jump, dodge, and discover fun facts about me!', centerX, centerY - 60);
    ctx.font = '16px Montserrat';
    ctx.fillText('How to play:', centerX, centerY - 30);
    ctx.fillText('Press SPACE or UP ARROW to jump and avoid obstacles!', centerX, centerY - 10);
    ctx.fillText(`Complete ${TOTAL_SESSIONS} sessions of ${SCORES_PER_SESSION} points each`, centerX, centerY + 10);
  };

  const drawSessionInfo = (ctx) => {
    ctx.fillStyle = '#D66969';
    ctx.font = 'bold 16px Montserrat';
    ctx.textAlign = 'right';
    ctx.fillText(`Session: ${currentSession}/${TOTAL_SESSIONS}`, CANVAS_WIDTH - 20, 40);
    ctx.fillText(`Session Progress: ${sessionScore}/${SCORES_PER_SESSION}`, CANVAS_WIDTH - 20, 70);
  };

  const drawBlock = (ctx, x, groundY) => {
    ctx.fillStyle = '#D66969';
    ctx.fillRect(x, groundY - BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
  };


  const drawStartButton = (ctx) => {
    const buttonWidth = 200;
    const buttonHeight = 60;
    const buttonX = (CANVAS_WIDTH - buttonWidth) / 2;
    const buttonY = CANVAS_HEIGHT / 2 + 50;
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText('Start Game', CANVAS_WIDTH / 2, buttonY + buttonHeight / 2 + 8);
    if (isMouseOverButton && isMouseDown) {
      startGame();
      setIsMouseDown(false);
    }
  };

  const drawFactScreen = (ctx) => {
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    ctx.fillStyle = '#FFF9F9';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = '#D66969';
    ctx.font = '18px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText(`Session ${currentSession} Complete!`, centerX, centerY - 100);
    ctx.font = 'bold 32px Montserrat';
    ctx.fillText(`Fun Fact ${currentSession}`, centerX, centerY - 60);
    ctx.fillStyle = '#C24A4A';
    ctx.font = ' 22px Montserrat';
    const factIndex = (currentSession - 1) % danceFacts.length;
    const fact = danceFacts[factIndex];
    const maxWidth = CANVAS_WIDTH * 0.8;
    const lineHeight = 30;
    const words = fact.split(' ');
    let line = '';
    let lines = [];
    let y = centerY + 20;
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], centerX, y-20);
      y += lineHeight;
    }
    drawContinueButton(ctx);
  };

  const drawContinueButton = (ctx) => {
    const buttonWidth = 250;
    const buttonHeight = 60;
    const buttonX = (CANVAS_WIDTH - buttonWidth) / 2;
    const buttonY = CANVAS_HEIGHT / 2 + 80;
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px Montserrat';
    ctx.textAlign = 'center';
    const buttonText = currentSession < TOTAL_SESSIONS ? 'Continue Playing' : 'See Final Results';
    ctx.fillText(buttonText, CANVAS_WIDTH / 2, buttonY + buttonHeight / 2 + 8);
    if (isMouseOverButton && isMouseDown) {
      if (currentSession < TOTAL_SESSIONS) {
        continueToNextSession();
      } else {
        setGameWon(true);
        setSessionPaused(false);
      }
      setIsMouseDown(false);
    }
  };

  const drawWinGameScreen = (ctx) => {
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    
    // Create festive background with gradients
    const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gradient.addColorStop(0, 'rgba(214, 105, 105, 0.9)');
    gradient.addColorStop(1, 'rgba(214, 105, 105, 0.7)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Add confetti-like particles
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = ['#FFF', '#FFD700', '#FF8C00', '#FF69B4'][Math.floor(Math.random() * 4)];
      const size = Math.random() * 10 + 5;
      ctx.fillRect(
        Math.random() * CANVAS_WIDTH,
        Math.random() * CANVAS_HEIGHT,
        size,
        size
      );
    }
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 52px Bona Nova';
    ctx.textAlign = 'center';
    ctx.fillText('CONGRATULATIONS!', centerX, centerY - 80);
    
    ctx.font = 'bold 36px Montserrat';
    ctx.fillText('Now you know me a little better!', centerX, centerY - 20);

    
    // ctx.font = '24px Montserrat';
    // ctx.fillText(`Final Score: ${score}`, centerX, centerY + 40);
    
    // if (score > highScore) {
    //   setHighScore(score);
    //   ctx.fillStyle = '#FFD700';
    //   ctx.font = 'bold 28px Montserrat';
    //   ctx.fillText('NEW HIGH SCORE!', centerX, centerY + 80);
    // } else {
    //   ctx.fillStyle = '#FFFFFF';
    //   ctx.font = '24px Montserrat';
    //   ctx.fillText(`High Score: ${highScore}`, centerX, centerY + 80);
    // }
    
    drawPlayAgainButton(ctx);
  };

  const drawPlayAgainButton = (ctx) => {
    const buttonWidth = 200;
    const buttonHeight = 60;
    const buttonX = (CANVAS_WIDTH - buttonWidth) / 2;
    const buttonY = CANVAS_HEIGHT / 2 + 60;
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText('Play Again', CANVAS_WIDTH / 2, buttonY + buttonHeight / 2 + 8);
    if (isMouseOverButton && isMouseDown) {
      resetGame();
      setIsMouseDown(false);
    }
  };

  const checkCollision = (dancerY, blockX) => {
    const dancerX = 50;
    const dancerRight = dancerX + DANCER_WIDTH;
    const dancerBottom = dancerY + DANCER_HEIGHT;
    const blockRight = blockX + BLOCK_WIDTH;
    const blockTop = CANVAS_HEIGHT - GROUND_HEIGHT - BLOCK_HEIGHT;
    return dancerRight > blockX && dancerX < blockRight && dancerBottom > blockTop;
  };

  const drawGameOverScreen = (ctx) => {
    const centerX = CANVAS_WIDTH / 2;
    const centerY = CANVAS_HEIGHT / 2;
    ctx.fillStyle = 'rgba(184, 99, 99, 0.6)';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Bona Nova';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', centerX, centerY - 70);
    ctx.font = '22px Montserrat';
    ctx.fillText(`You completed ${currentSession - 1} full sessions!`, centerX, centerY - 30);
    drawPlayAgainButton(ctx);
  };

  const gameLoop = (timestamp) => {
    if (!gameStarted || gameOver || sessionPaused || gameWon) return;

    const ctx = canvasRef.current.getContext('2d');
    const groundY = CANVAS_HEIGHT - GROUND_HEIGHT;

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
      drawGround(ctx, groundY);
      drawBlock(ctx, block.x, groundY);
      drawDancer(ctx);
      drawSessionInfo(ctx);
      drawGameOverScreen(ctx);
      return;
    }

    if (block.x + BLOCK_WIDTH < -150) {
      if (!sessionPaused) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
      }
      sessionScoreRef.current += 1;
      setSessionScore(sessionScoreRef.current);
      if (sessionScoreRef.current >= SCORES_PER_SESSION) {
        setSessionPaused(true);
        return;
      }
      block.x = CANVAS_WIDTH + 200 + Math.random() * 200;
    }

    drawGround(ctx, groundY);
    drawBlock(ctx, block.x, groundY);
    drawDancer(ctx);
    drawSessionInfo(ctx);

    if (!gameOver && !sessionPaused && !gameWon) {
      requestAnimationFrame(gameLoop);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const groundY = CANVAS_HEIGHT - GROUND_HEIGHT;
    gameStateRef.current.dancerY = groundY - DANCER_HEIGHT;

    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameOver || gameWon) {
          resetGame();
        } else if (sessionPaused) {
          if (currentSession < TOTAL_SESSIONS) {
            continueToNextSession();
          } else {
            setGameWon(true);
            setSessionPaused(false);
          }
        } else if (!gameStateRef.current.isJumping && gameStarted) {
          jump();
        } else if (!gameStarted) {
          startGame();
        }
      }
    };

    const handleTouch = (e) => {
      e.preventDefault();
      if (gameOver || gameWon) {
        resetGame();
      } else if (sessionPaused) {
        if (currentSession < TOTAL_SESSIONS) {
          continueToNextSession();
        } else {
          setGameWon(true);
          setSessionPaused(false);
        }
      } else if (!gameStateRef.current.isJumping && gameStarted) {
        jump();
      } else if (!gameStarted) {
        startGame();
      }
    };

    const jump = () => {
      gameStateRef.current.isJumping = true;
      gameStateRef.current.dancerVelocity = JUMP_FORCE;
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleTouch);

    if (!gameStarted) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawGround(ctx, groundY);
      drawDancer(ctx);
      drawStartScreen(ctx);
      drawStartButton(ctx);
    } else if (sessionPaused) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawFactScreen(ctx);
    } else if (gameWon) {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawWinGameScreen(ctx);
    } else if (gameStarted && !gameOver) {
      requestAnimationFrame(gameLoop);
    } else if (gameOver) {
      drawGround(ctx, groundY);
      const block = gameStateRef.current.block;
      drawBlock(ctx, block.x, groundY);
      drawDancer(ctx);
      drawSessionInfo(ctx);
      drawGameOverScreen(ctx);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('touchstart', handleTouch);
    };
  }, [gameStarted, gameOver, gameWon, score, highScore, theme, mousePos, isMouseDown, currentSession, sessionPaused, sessionScore]);

  function startGame() {
    setGameStarted(true);
    setGameOver(false);
    setGameWon(false);
    setScore(0); // Reset total score for a new game
    scoreRef.current = 0;
    setSessionScore(0);
    sessionScoreRef.current = 0;
    setCurrentSession(1);
    setSessionPaused(false);
    gameStateRef.current = {
      dancerY: CANVAS_HEIGHT - GROUND_HEIGHT - DANCER_HEIGHT,
      dancerVelocity: 0,
      isJumping: false,
      block: { x: CANVAS_WIDTH + 100 },
      lastTimestamp: 0,
    };
    requestAnimationFrame(gameLoop);
  }

  function resetGame() {
    startGame();
  }

  function continueToNextSession() {
    setCurrentSession((prev) => prev + 1);
    setSessionPaused(false);
    setSessionScore(0); // Reset session score only
    sessionScoreRef.current = 0;
    gameStateRef.current = {
      ...gameStateRef.current,
      block: { x: CANVAS_WIDTH + 100 },
      lastTimestamp: 0,
    };
    requestAnimationFrame(gameLoop);
  }

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
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
      <div className={styles.howToPlay}>
        <p>How to Play:</p>
        <p>
        {gameOver || gameWon
          ? 'Press SPACE or UP ARROW to play again'
          : sessionPaused
          ? 'Press SPACE or UP ARROW to continue'
          : 'Press SPACE or UP ARROW to jump'}
      </p>
      </div>
      
    </div>
  );
}