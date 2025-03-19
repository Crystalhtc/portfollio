'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const GROUND_HEIGHT = 150;
const DANCER_WIDTH = 60;
const DANCER_HEIGHT = 64;
const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 50;
const GRAVITY = 1500; 
const JUMP_FORCE = -700; 
const GAME_SPEED = 400; 
const TERMINAL_VELOCITY = 800; 

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

    const isDark = theme === 'dark';
    const groundY = CANVAS_HEIGHT - GROUND_HEIGHT;
    gameStateRef.current.dancerY = groundY - DANCER_HEIGHT;

    // Drawing functions
    function drawDino() {
      ctx.fillStyle = isDark ? '#ffffff' : '#000000';
      ctx.fillRect(50, gameStateRef.current.dancerY, DANCER_WIDTH, DANCER_HEIGHT);
    }

    function drawGround() {
      ctx.fillStyle = isDark ? '#333333' : '#cccccc';
      ctx.fillRect(0, groundY, CANVAS_WIDTH, 2);
    }

    function drawCactus(x) {
      ctx.fillStyle = isDark ? '#ffffff' : '#000000';
      ctx.fillRect(x, groundY - BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
    }

    // Collision detection
    function checkCollision(dancerY, blockX) {
      const dancerX = 50;
      const dancerRight = dancerX + DANCER_WIDTH;
      const dancerBottom = dancerY + DANCER_HEIGHT;
      const blockRight = blockX + BLOCK_WIDTH;
      const blockTop = groundY - BLOCK_HEIGHT;

      return (
        dancerRight > blockX &&
        dancerX < blockRight &&
        dancerBottom > blockTop
      );
    }

    // Game loop
    function gameLoop(timestamp) {
      if (!gameStarted || gameOver) return;

      if (!gameStateRef.current.lastTimestamp) {
        gameStateRef.current.lastTimestamp = timestamp;
      }
      const deltaTime = timestamp - gameStateRef.current.lastTimestamp;
      const timeScale = deltaTime / 1000; // Convert to seconds
      gameStateRef.current.lastTimestamp = timestamp;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Update dancersaur position
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

      // Update block position
      const block = gameStateRef.current.block;
      block.x -= GAME_SPEED * timeScale;

      if (checkCollision(gameStateRef.current.dancerY, block.x)) {
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        return;
      }

      if (block.x + BLOCK_WIDTH < 0) {
        setScore((prev) => prev + 1);
        block.x = CANVAS_WIDTH + 200 + Math.random() * 200; // Reset with spacing
      }

      drawGround();
      drawCactus(block.x);
      drawDino();

      if (!gameOver) {
        requestAnimationFrame(gameLoop);
      }
    }

    // Input handlers
    function handleKeyDown(e) {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !gameStateRef.current.isJumping) {
        jump();
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

    // Event listeners
    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleTouch);

    if (gameStarted && !gameOver) {
      requestAnimationFrame(gameLoop);
    }

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('touchstart', handleTouch);
    };
  }, [gameStarted, gameOver, score, theme]);

  // Start or reset game
  function startGame() {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    const groundY = CANVAS_HEIGHT - GROUND_HEIGHT;
    gameStateRef.current = {
      dancerY: groundY - DANCER_HEIGHT,
      dancerVelocity: 0,
      isJumping: false,
      block: { x: CANVAS_WIDTH + 100 }, // Start off-screen
      lastTimestamp: 0,
    };
  }

  // Render
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center mb-4">
        <p className="text-2xl font-bold mb-2">Score: {score}</p>
        <p className="text-lg">High Score: {highScore}</p>
      </div>

      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border border-gray-300 dark:border-gray-700 rounded-lg"
      />

      {!gameStarted || gameOver ? (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {gameOver ? 'Play Again' : 'Start Game'}
        </button>
      ) : null}

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        Press SPACE or UP ARROW to jump
      </p>
    </div>
  );
}