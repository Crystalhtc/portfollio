'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './DanceGame.module.css';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const GROUND_HEIGHT = 0;
const DANCER_WIDTH = 60;
const DANCER_HEIGHT = 200;
const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 50;
const GRAVITY = 1500; 
const JUMP_FORCE = -700; 
const GAME_SPEED = 400; 
const TERMINAL_VELOCITY = 800; 

const dancerImage = new Image();
dancerImage.src = '/game/dancer.svg';

export default function TRexGame() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { theme } = useTheme();

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
      ctx.drawImage(dancerImage, 50, gameStateRef.current.dancerY, DANCER_WIDTH, DANCER_HEIGHT);
    }

    function drawGround() {
      ctx.fillStyle = '#D66969';
      ctx.fillRect(0, groundY, CANVAS_WIDTH, 2);
    }

    function drawBlock(x) {
      ctx.fillStyle = '#D66969';
      ctx.fillRect(x, groundY - BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
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
        return;
      }

      if (block.x + BLOCK_WIDTH < 0) {
        setScore((prev) => prev + 1);
        block.x = CANVAS_WIDTH + 200 + Math.random() * 200;
      }

      drawGround();
      drawBlock(block.x);
      drawDancer();

      if (!gameOver) {
        requestAnimationFrame(gameLoop);
      }
    }

    function handleKeyDown(e) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!gameStateRef.current.isJumping) {
          jump();
        }
      }
    }

    function handleTouch(e) {
      e.preventDefault();
      if (!gameStateRef.current.isJumping) {
        jump();
      }
    }

    function jump() {
      gameStateRef.current.isJumping = true;
      gameStateRef.current.dancerVelocity = JUMP_FORCE;
    }

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleTouch);

    if (gameStarted && !gameOver) {
      requestAnimationFrame(gameLoop);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('touchstart', handleTouch);
    };
  }, [gameStarted, gameOver, score, theme]);

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

  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreBoard}>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} className={styles.gameArea} />
      {!gameStarted || gameOver ? (
        <button onClick={startGame} className={styles.startButton}>
          {gameOver ? 'Play Again' : 'Start Game'}
        </button>
      ) : null}
      <p className={styles.howToPlay}>Press SPACE or UP ARROW to jump</p>
    </div>
  );
}
