"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './DanceGame.module.css';

export default function DanceGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  
  const gameRef = useRef(null);
  const dancerRef = useRef(null);
  const frameRef = useRef(null);
  const obstacleIntervalRef = useRef(null);
  const obstacleWidth = 30;
  const obstacleMinHeight = 30;
  const obstacleMaxHeight = 60;
  const obstacleSpeed = 5;
  const jumpHeight = 150;
  const jumpDuration = 500;
  
  // Initialize game
  const startGame = () => { 
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    
    // Start animation frame
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(gameLoop);
    
    // Generate obstacles
    if (obstacleIntervalRef.current) clearInterval(obstacleIntervalRef.current);
    obstacleIntervalRef.current = setInterval(() => {
      setObstacles(prev => [
        ...prev,
        {
          id: Date.now(),
          x: 800,
          height: Math.floor(Math.random() * (obstacleMaxHeight - obstacleMinHeight)) + obstacleMinHeight
        }
      ]);
    }, 2000);
  };
  
  // Handle jumping
  const jump = () => {
    if (!jumping && gameStarted && !gameOver) {
      setJumping(true);
      setTimeout(() => {
        setJumping(false);
      }, jumpDuration);
    }
  };
  
  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (!gameStarted) {
          startGame();
        } else {
          jump();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, jumping, gameOver]);
  
  // Main game loop
  const gameLoop = () => {
    if (gameOver) return;
    
    // Update rotation
    setRotation(prev => (prev + 2) % 360);
    
    // Update obstacle positions
    setObstacles(prev => {
      return prev
        .map(obstacle => ({
          ...obstacle,
          x: obstacle.x - obstacleSpeed
        }))
        .filter(obstacle => obstacle.x > -obstacleWidth);
    });
    

    
    setScore(prev => prev + 1);
    
    frameRef.current = requestAnimationFrame(gameLoop);
  };

  const endGame = () => {
    setGameOver(true);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (obstacleIntervalRef.current) clearInterval(obstacleIntervalRef.current);
  };

        // Collision detection
    if (dancerRef.current) {
      const dancerRect = dancerRef.current.getBoundingClientRect();
      
      if (gameRef.current) {
        const gameRect = gameRef.current.getBoundingClientRect();
        
        obstacles.forEach(obstacle => {
          const obstacleEl = document.getElementById(`obstacle-${obstacle.id}`);
          if (obstacleEl) {
            const obstacleRect = obstacleEl.getBoundingClientRect();
            
            // Adjust coordinates relative to game container
            const dancerLeft = dancerRect.left - gameRect.left;
            const dancerRight = dancerRect.right - gameRect.left;
            const dancerTop = dancerRect.top - gameRect.top;
            const dancerBottom = dancerRect.bottom - gameRect.top;
            
            const obstacleLeft = obstacleRect.left - gameRect.left;
            const obstacleRight = obstacleRect.right - gameRect.left;
            const obstacleTop = obstacleRect.top - gameRect.top;
            const obstacleBottom = obstacleRect.bottom - gameRect.top;
            
            // Check for collision
            if (
              dancerRight > obstacleLeft &&
              dancerLeft < obstacleRight &&
              dancerBottom > obstacleTop &&
              dancerTop < obstacleBottom
            ) {
              endGame();
              return;
            }
          }
        });
      }
    }
  
  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (obstacleIntervalRef.current) clearInterval(obstacleIntervalRef.current);
    };
  }, []);
  
  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreBoard}>Score: {score}</div>
      
      <div 
        ref={gameRef}
        className={styles.gameArea}
        onClick={() => {
          if (!gameStarted) startGame();
          else if (!gameOver) jump();
        }}
      >
        {!gameStarted && !gameOver && (
          <div className={styles.startScreen}>
            <h2>Dancing Jumper</h2>
            <p>Press SPACE to start</p>
          </div>
        )}
        
        {gameOver && (
          <div className={styles.gameOverScreen}>
            <h2>Game Over!</h2>
            <p>Your score: {score}</p>
            <button className={styles.restartButton} onClick={startGame}>
              Play Again
            </button>
          </div>
        )}
        
        {(gameStarted || gameOver) && (
          <>
            <div 
              ref={dancerRef}
              className={styles.dancer}
              style={{
                transform: `translateY(${jumping ? -jumpHeight : 0}px)    `,
                transition: jumping ? `transform ${jumpDuration/1000}s cubic-bezier(0.1, 0.8, 0.2, 1)` : 'transform 0.1s linear',
              }}
            >
              <img
                    src="/game/dancer.svg"
                    alt='Dancer'
                    className={styles.dancer}
                    loading="lazy"
                />
            </div>
            
            {obstacles.map(obstacle => (
              <div
                id={`obstacle-${obstacle.id}`}
                key={obstacle.id}
                className={styles.obstacle}
                style={{
                  left: `${obstacle.x}px`,
                  height: `${obstacle.height}px`,
                  bottom: '0',
                }}
              ></div>
            ))}
            
            <div className={styles.ground}></div>
          </>
        )}
      </div>
    </div>
  );
}