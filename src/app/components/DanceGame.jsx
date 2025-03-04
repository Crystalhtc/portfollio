// pages/index.js
"use client";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from './DanceGame.module.css';
// At the top of your component, add a ref for game start time:


export default function DanceGame() {
const gameStartTimeRef = useRef(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [dancerRotation, setDancerRotation] = useState(0);
  const [dancerPosition, setDancerPosition] = useState({ x: 100, y: 300 });
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [lastKeyPressed, setLastKeyPressed] = useState(null);
  const [rotationDirection, setRotationDirection] = useState(1); // 1 for clockwise, -1 for counter-clockwise
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [isFalling, setIsFalling] = useState(false);
  const gameLoopRef = useRef(null);
  const obstacleTimerRef = useRef(null);
  const scoreTimerRef = useRef(null);

  // Game constants
  const FLOOR_Y = 300;
  const JUMP_HEIGHT = 120;
  const JUMP_SPEED = 10;
  const MAX_ROTATION_SPEED = 6;
  const ROTATION_DECAY = 0.05;
  const MIN_ROTATION_SPEED = 1;
  const OBSTACLE_SPEED = 5;

const startGame = () => {
  setIsGameActive(true);
  setGameOver(false);
  setScore(0);
  setDancerRotation(0);
  setDancerPosition({ x: 100, y: FLOOR_Y });
  setIsJumping(false);
  setIsFalling(false);
  setObstacles([]);
  setLastKeyPressed(null);
  setRotationDirection(1);
  setRotationSpeed(MAX_ROTATION_SPEED / 2);
  // Compute the dancer's visible top position
const dancerSize = 40;
const dancerTop = dancerPosition.y - 40; // because the dancer is drawn at y-40

// Check collisions with obstacles
obstacles.forEach(obstacle => {
  if (
    dancerPosition.x < obstacle.x + obstacle.width &&
    dancerPosition.x + dancerSize > obstacle.x &&
    dancerTop < obstacle.y + obstacle.height &&
    dancerTop + dancerSize > obstacle.y
  ) {
    handleGameOver();
  }
});

// Update falling: move the dancer down until it goes off-screen
if (isFalling && dancerTop < window.innerHeight) {
  setDancerPosition(prev => ({ ...prev, y: prev.y + 2 }));
  setDancerRotation(prev => prev + rotationDirection * 2);
  // Check if the dancer's top has moved below the screen
  if (dancerTop > window.innerHeight) {
    handleGameOver();
  }
}

  
  // Record the time when the game starts
  gameStartTimeRef.current = Date.now();
  
  // Game loop & timers remain the same...
  gameLoopRef.current = requestAnimationFrame(gameLoop);
  obstacleTimerRef.current = setInterval(() => {
    if (!gameOver) {
      setObstacles(prev => [
        ...prev,
        {
          id: Date.now(),
          x: window.innerWidth,
          y: FLOOR_Y,
          width: 30,
          height: 30
        }
      ]);
    }
  }, 2000);
  scoreTimerRef.current = setInterval(() => {
    if (!gameOver) {
      setScore(prev => prev + 1);
    }
  }, 100);
};


  // Game loop
  const gameLoop = () => {
    if (!gameOver) {
      // Update dancer rotation
      // Update dancer rotation
if (rotationSpeed > 0) {
  setDancerRotation(prev => prev + rotationDirection * rotationSpeed);
  setRotationSpeed(prev => Math.max(prev - ROTATION_DECAY, 0));
} 
// Only start falling after 2 seconds have passed
else if (!isFalling && Date.now() - gameStartTimeRef.current >= 2000) {
  setIsFalling(true);
}

      // Update dancer position (for jumping)
      if (isJumping && !isFalling) {
  setDancerPosition(prev => {
    // Going up until reaching the jump height
    if (prev.y > FLOOR_Y - JUMP_HEIGHT && !prev.isDescending) {
      return { ...prev, y: prev.y - JUMP_SPEED };
    } 
    // Once at the peak, start descending
    else if (prev.y <= FLOOR_Y - JUMP_HEIGHT && !prev.isDescending) {
      return { ...prev, y: prev.y, isDescending: true };
    } 
    // Descending back down
    else if (prev.y < FLOOR_Y && prev.isDescending) {
      return { ...prev, y: prev.y + JUMP_SPEED };
    } 
    // Landed: reset jump state
    else {
      setIsJumping(false);
      return { x: prev.x, y: FLOOR_Y, isDescending: false };
    }
  });
}

      
      // Update obstacles
      setObstacles(prev => 
        prev.map(obstacle => ({
          ...obstacle,
          x: obstacle.x - OBSTACLE_SPEED
        })).filter(obstacle => obstacle.x > -obstacle.width)
      );
      
      // Check for collisions
      const dancerSize = 40;
      obstacles.forEach(obstacle => {
        if (
          dancerPosition.x < obstacle.x + obstacle.width &&
          dancerPosition.x + dancerSize > obstacle.x &&
          dancerPosition.y < obstacle.y + obstacle.height &&
          dancerPosition.y + dancerSize > obstacle.y
        ) {
          handleGameOver();
        }
      });
      
      // Check if dancer has fallen
      if (isFalling && dancerPosition.y < window.innerHeight) {
        setDancerPosition(prev => ({ ...prev, y: prev.y + 2 }));
        setDancerRotation(prev => prev + rotationDirection * 2);
        if (dancerPosition.y > window.innerHeight) {
          handleGameOver();
        }
      }
      
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  };
  
  // Handle game over
  const handleGameOver = () => {
    setGameOver(true);
    setIsGameActive(false);
    if (score > highScore) {
      setHighScore(score);
    }
    cancelAnimationFrame(gameLoopRef.current);
    clearInterval(obstacleTimerRef.current);
    clearInterval(scoreTimerRef.current);
  };
  
  // Handle key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGameActive || gameOver) return;
      
      // Handle arrow keys for rotation
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        if (lastKeyPressed !== e.key) {
          // Correct alternating pattern
          if (
            (lastKeyPressed === 'ArrowLeft' && e.key === 'ArrowRight') ||
            (lastKeyPressed === 'ArrowRight' && e.key === 'ArrowLeft') ||
            lastKeyPressed === null
          ) {
            setRotationDirection(e.key === 'ArrowRight' ? 1 : -1);
            setRotationSpeed(MAX_ROTATION_SPEED);
            setIsFalling(false);
          }
          setLastKeyPressed(e.key);
        }
      }
      
      // Handle space for jumping
       if (e.key === ' ' && !isJumping && !isFalling && dancerPosition.y === FLOOR_Y) {
    setIsJumping(true);
  }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lastKeyPressed, isGameActive, gameOver, isJumping, dancerPosition.y]);
  
  // Clean up game resources on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
      clearInterval(obstacleTimerRef.current);
      clearInterval(scoreTimerRef.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dancer Minigame</title>
        <meta name="description" content="A dancing minigame with obstacles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dancer Minigame</h1>
        
        <div className={styles.scoreBoard}>
          <div className={styles.score}>Score: {score}</div>
          <div className={styles.score}>High Score: {highScore}</div>
        </div>
        
        {!isGameActive && (
          <button 
            onClick={startGame}
            className={styles.button}
          >
            {gameOver ? 'Play Again' : 'Start Game'}
          </button>
        )}
        
        {gameOver && (
          <div className={styles.gameOver}>Game Over!</div>
        )}
        
        <div className={styles.gameArea}>
          {/* Floor */}
          <div 
            className={styles.floor}
            style={{ top: FLOOR_Y + 10 }}
          ></div>
          
          {/* Dancer */}
          <div
            className={`${styles.dancer} ${isFalling ? styles.falling : ''}`}
            style={{
              left: dancerPosition.x,
              top: dancerPosition.y - 40, // Adjust for dancer height
              transform: `rotate(${dancerRotation}deg)`,
            }}
          >
            {/* Dancer head */}
            <div className={styles.dancerHead}></div>
            {/* Dancer body */}
            <div className={styles.dancerBody}></div>
            {/* Dancer arms */}
            <div className={styles.dancerArm1}></div>
            <div className={styles.dancerArm2}></div>
            {/* Dancer legs */}
            <div className={styles.dancerLeg1}></div>
            <div className={styles.dancerLeg2}></div>
          </div>
          
          {/* Obstacles */}
          {obstacles.map(obstacle => (
            <div
              key={obstacle.id}
              className={styles.obstacle}
              style={{
                left: obstacle.x,
                top: obstacle.y - obstacle.height,
                width: obstacle.width,
                height: obstacle.height
              }}
            ></div>
          ))}
        </div>
        
        <div className={styles.instructions}>
          <p><strong>How to play:</strong></p>
          <p>Press Left and Right arrow keys alternately to keep the dancer spinning</p>
          <p>Press Space to jump over obstacles</p>
          <p>If you stop spinning or hit an obstacle, it's game over!</p>
        </div>
      </main>
    </div>
  );
}