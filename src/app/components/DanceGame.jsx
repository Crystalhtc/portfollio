'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './DanceGame.module.css';

const CANVAS_ASPECT_RATIO = 2.5; 
const GROUND_HEIGHT = 0;
const DANCER_WIDTH_PERCENT = 0.1; 
const DANCER_HEIGHT_PERCENT = 0.5; 
const BLOCK_WIDTH_PERCENT = 0.03; 
const BLOCK_HEIGHT_PERCENT = 0.125; 
const GRAVITY = 1500;
const JUMP_FORCE = -700;
const GAME_SPEED = 400;
const TERMINAL_VELOCITY = 800;
const SCORES_PER_SESSION = 3;
const TOTAL_SESSIONS = 5;

export default function DanceGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 400 });
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

  // Responsive measurements based on canvas size
  const getDancerWidth = () => canvasSize.width * DANCER_WIDTH_PERCENT;
  const getDancerHeight = () => canvasSize.height * DANCER_HEIGHT_PERCENT;
  const getBlockWidth = () => canvasSize.width * BLOCK_WIDTH_PERCENT;
  const getBlockHeight = () => canvasSize.height * BLOCK_HEIGHT_PERCENT;

  // Function to handle window resize
  const handleResize = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerWidth / CANVAS_ASPECT_RATIO;
      
      setCanvasSize({
        width: containerWidth,
        height: containerHeight
      });

      // Reset dancer position when resizing
      if (canvasRef.current) {
        const groundY = containerHeight - GROUND_HEIGHT;
        gameStateRef.current.dancerY = groundY - getDancerHeight();
      }
    }
  };

  useEffect(() => {
    // Set initial size
    handleResize();
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Load dancer image
    const img = new Image();
    img.src = '/game/dancer.svg';
    img.onload = () => {
      dancerImageRef.current = img;
    };

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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
      ctx.drawImage(
        dancerImageRef.current, 
        canvasSize.width * 0.05, 
        gameStateRef.current.dancerY, 
        getDancerWidth(), 
        getDancerHeight()
      );
    } else {
      ctx.fillStyle = 'blue';
      ctx.fillRect(
        canvasSize.width * 0.05, 
        gameStateRef.current.dancerY, 
        getDancerWidth(), 
        getDancerHeight()
      );
    }
  };

  const drawGround = (ctx, groundY) => {
    ctx.fillStyle = '#D66969';
    ctx.fillRect(0, groundY, canvasSize.width, 2);
  };

  const drawStartScreen = (ctx) => {
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    
    // Responsive font sizes
    const titleFontSize = Math.max(20, Math.min(40, canvasSize.width / 25));
    const subtitleFontSize = Math.max(12, Math.min(20, canvasSize.width / 50));
    const infoFontSize = Math.max(10, Math.min(16, canvasSize.width / 60));
    
    ctx.fillStyle = '#D66969';
    ctx.font = `bold ${titleFontSize}px Bona Nova`;
    ctx.textAlign = 'center';
    ctx.fillText('Dance with Me', centerX, centerY - canvasSize.height * 0.25);
    
    ctx.font = `bold ${subtitleFontSize}px Montserrat`;
    ctx.fillText('Jump, dodge, and discover fun facts about me!', centerX, centerY - canvasSize.height * 0.15);
    
    ctx.font = `${infoFontSize}px Montserrat`;
    ctx.fillText('How to play:', centerX, centerY - canvasSize.height * 0.075);
    ctx.fillText('Press SPACE or UP ARROW to jump and avoid obstacles!', centerX, centerY - canvasSize.height * 0.025);
    ctx.fillText(`Complete ${TOTAL_SESSIONS} sessions of ${SCORES_PER_SESSION} points each`, centerX, centerY + canvasSize.height * 0.025);
  };

  const drawSessionInfo = (ctx) => {
    const fontSize = Math.max(10, Math.min(16, canvasSize.width / 60));
    
    ctx.fillStyle = '#D66969';
    ctx.font = `bold ${fontSize}px Montserrat`;
    ctx.textAlign = 'right';
    ctx.fillText(`Session: ${currentSession}/${TOTAL_SESSIONS}`, canvasSize.width - 20, 40);
    ctx.fillText(`Session Progress: ${sessionScore}/${SCORES_PER_SESSION}`, canvasSize.width - 20, 70);
  };

  const drawBlock = (ctx, x, groundY) => {
    ctx.fillStyle = '#D66969';
    ctx.fillRect(
      x, 
      groundY - getBlockHeight(), 
      getBlockWidth(), 
      getBlockHeight()
    );
  };

  const drawStartButton = (ctx) => {
    const buttonWidth = canvasSize.width * 0.2;
    const buttonHeight = canvasSize.height * 0.15;
    const buttonX = (canvasSize.width - buttonWidth) / 2;
    const buttonY = canvasSize.height / 2 + canvasSize.height * 0.125;
    const buttonFontSize = Math.max(14, Math.min(24, canvasSize.width / 40));
    
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
      
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${buttonFontSize}px Montserrat`;
    ctx.textAlign = 'center';
    ctx.fillText('Start Game', canvasSize.width / 2, buttonY + buttonHeight / 2 + buttonFontSize / 3);
    
    if (isMouseOverButton && isMouseDown) {
      startGame();
      setIsMouseDown(false);
    }
  };

  const drawFactScreen = (ctx) => {
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    
    const titleFontSize = Math.max(16, Math.min(32, canvasSize.width / 30));
    const factTitleFontSize = Math.max(18, Math.min(32, canvasSize.width / 30));
    const factFontSize = Math.max(14, Math.min(22, canvasSize.width / 45));
    
    ctx.fillStyle = '#FFF9F9';
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    
    ctx.fillStyle = '#D66969';
    ctx.font = `${titleFontSize}px Montserrat`;
    ctx.textAlign = 'center';
    ctx.fillText(`Session ${currentSession} Complete!`, centerX, centerY - canvasSize.height * 0.25);
    
    ctx.font = `bold ${factTitleFontSize}px Montserrat`;
    ctx.fillText(`Fun Fact ${currentSession}`, centerX, centerY - canvasSize.height * 0.15);
    
    ctx.fillStyle = '#C24A4A';
    ctx.font = `${factFontSize}px Montserrat`;
    
    const factIndex = (currentSession - 1) % danceFacts.length;
    const fact = danceFacts[factIndex];
    const maxWidth = canvasSize.width * 0.8;
    const lineHeight = factFontSize * 1.4;
    
    const words = fact.split(' ');
    let line = '';
    let lines = [];
    let y = centerY + canvasSize.height * 0.05;
    
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
      ctx.fillText(lines[i], centerX, y - canvasSize.height * 0.05);
      y += lineHeight;
    }
    
    drawContinueButton(ctx);
  };

  const drawContinueButton = (ctx) => {
    const buttonWidth = canvasSize.width * 0.25;
    const buttonHeight = canvasSize.height * 0.15;
    const buttonX = (canvasSize.width - buttonWidth) / 2;
    const buttonY = canvasSize.height / 2 + canvasSize.height * 0.2;
    const buttonFontSize = Math.max(14, Math.min(24, canvasSize.width / 40));
    
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
      
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${buttonFontSize}px Montserrat`;
    ctx.textAlign = 'center';
    
    const buttonText = currentSession < TOTAL_SESSIONS ? 'Continue Playing' : 'See Final Results';
    ctx.fillText(buttonText, canvasSize.width / 2, buttonY + buttonHeight / 2 + buttonFontSize / 3);
    
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
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    
    const titleFontSize = Math.max(24, Math.min(52, canvasSize.width / 20));
    const subtitleFontSize = Math.max(18, Math.min(36, canvasSize.width / 28));
    const buttonFontSize = Math.max(14, Math.min(24, canvasSize.width / 40));
    
    // Create festive background with gradients
    const gradient = ctx.createLinearGradient(0, 0, canvasSize.width, canvasSize.height);
    gradient.addColorStop(0, 'rgba(214, 105, 105, 0.9)');
    gradient.addColorStop(1, 'rgba(214, 105, 105, 0.7)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    
    // Add confetti-like particles (scale with canvas size)
    const particleCount = Math.floor(canvasSize.width * canvasSize.height / 4000);
    for (let i = 0; i < particleCount; i++) {
      ctx.fillStyle = ['#FFF', '#FFD700', '#FF8C00', '#FF69B4'][Math.floor(Math.random() * 4)];
      const size = Math.random() * (canvasSize.width / 100) + (canvasSize.width / 200);
      ctx.fillRect(
        Math.random() * canvasSize.width,
        Math.random() * canvasSize.height,
        size,
        size
      );
    }
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${titleFontSize}px Bona Nova`;
    ctx.textAlign = 'center';
    ctx.fillText('CONGRATULATIONS!', centerX, centerY - canvasSize.height * 0.2);
    
    ctx.font = `bold ${subtitleFontSize}px Montserrat`;
    ctx.fillText('Now you know me a little better!', centerX, centerY - canvasSize.height * 0.05);
    
    drawPlayAgainButton(ctx);
  };

  const drawPlayAgainButton = (ctx) => {
    const buttonWidth = canvasSize.width * 0.2;
    const buttonHeight = canvasSize.height * 0.15;
    const buttonX = (canvasSize.width - buttonWidth) / 2;
    const buttonY = canvasSize.height / 2 + canvasSize.height * 0.15;
    const buttonFontSize = Math.max(14, Math.min(24, canvasSize.width / 40));
    
    const isMouseOverButton =
      mousePos.x >= buttonX &&
      mousePos.x <= buttonX + buttonWidth &&
      mousePos.y >= buttonY &&
      mousePos.y <= buttonY + buttonHeight;
      
    ctx.fillStyle = isMouseOverButton ? '#E87979' : '#D66969';
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${buttonFontSize}px Montserrat`;
    ctx.textAlign = 'center';
    ctx.fillText('Play Again', canvasSize.width / 2, buttonY + buttonHeight / 2 + buttonFontSize / 3);
    
    if (isMouseOverButton && isMouseDown) {
      resetGame();
      setIsMouseDown(false);
    }
  };

  const checkCollision = (dancerY, blockX) => {
    const dancerX = canvasSize.width * 0.05;
    const dancerRight = dancerX + getDancerWidth();
    const dancerBottom = dancerY + getDancerHeight();
    const blockRight = blockX + getBlockWidth();
    const blockTop = canvasSize.height - GROUND_HEIGHT - getBlockHeight();
    
    return dancerRight > blockX && dancerX < blockRight && dancerBottom > blockTop;
  };

  const drawGameOverScreen = (ctx) => {
    const centerX = canvasSize.width / 2;
    const centerY = canvasSize.height / 2;
    
    const titleFontSize = Math.max(24, Math.min(48, canvasSize.width / 20));
    const subtitleFontSize = Math.max(14, Math.min(22, canvasSize.width / 45));
    
    ctx.fillStyle = 'rgba(184, 99, 99, 0.6)';
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${titleFontSize}px Bona Nova`;
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', centerX, centerY - canvasSize.height * 0.175);
    
    ctx.font = `${subtitleFontSize}px Montserrat`;
    ctx.fillText(`You completed ${currentSession - 1} full sessions!`, centerX, centerY - canvasSize.height * 0.075);
    
    drawPlayAgainButton(ctx);
  };

  const gameLoop = (timestamp) => {
    if (!gameStarted || gameOver || sessionPaused || gameWon) return;

    const ctx = canvasRef.current.getContext('2d');
    const groundY = canvasSize.height - GROUND_HEIGHT;

    if (!gameStateRef.current.lastTimestamp) {
      gameStateRef.current.lastTimestamp = timestamp;
    }
    const deltaTime = timestamp - gameStateRef.current.lastTimestamp;
    const timeScale = deltaTime / 1000;
    gameStateRef.current.lastTimestamp = timestamp;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    if (gameStateRef.current.isJumping) {
      const scaledGravity = GRAVITY * (canvasSize.height / 400);
      
      gameStateRef.current.dancerVelocity += scaledGravity * timeScale;
      if (gameStateRef.current.dancerVelocity > TERMINAL_VELOCITY) {
        gameStateRef.current.dancerVelocity = TERMINAL_VELOCITY;
      }
      gameStateRef.current.dancerY += gameStateRef.current.dancerVelocity * timeScale;
      if (gameStateRef.current.dancerY >= groundY - getDancerHeight()) {
        gameStateRef.current.dancerY = groundY - getDancerHeight();
        gameStateRef.current.dancerVelocity = 0;
        gameStateRef.current.isJumping = false;
      }
    }

    const block = gameStateRef.current.block;
    const scaledGameSpeed = GAME_SPEED * (canvasSize.width / 1000);
    block.x -= scaledGameSpeed * timeScale;

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

    if (block.x + getBlockWidth() < -150 * (canvasSize.width / 1000)) {
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
      block.x = canvasSize.width + 200 * (canvasSize.width / 1000) + Math.random() * 200 * (canvasSize.width / 1000);
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

    const groundY = canvasSize.height - GROUND_HEIGHT;
    gameStateRef.current.dancerY = groundY - getDancerHeight();

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
      const scaledJumpForce = JUMP_FORCE * (canvasSize.height / 400);
      gameStateRef.current.dancerVelocity = scaledJumpForce;
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('touchstart', handleTouch);

    if (!gameStarted) {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      drawGround(ctx, groundY);
      drawDancer(ctx);
      drawStartScreen(ctx);
      drawStartButton(ctx);
    } else if (sessionPaused) {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      drawFactScreen(ctx);
    } else if (gameWon) {
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
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
  }, [gameStarted, gameOver, gameWon, score, highScore, theme, mousePos, isMouseDown, currentSession, sessionPaused, sessionScore, canvasSize]);

  function startGame() {
    setGameStarted(true);
    setGameOver(false);
    setGameWon(false);
    setScore(0);
    scoreRef.current = 0;
    setSessionScore(0);
    sessionScoreRef.current = 0;
    setCurrentSession(1);
    setSessionPaused(false);
    
    const groundY = canvasSize.height - GROUND_HEIGHT;
    
    gameStateRef.current = {
      dancerY: groundY - getDancerHeight(),
      dancerVelocity: 0,
      isJumping: false,
      block: { x: canvasSize.width + canvasSize.width * 0.1 },
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
    setSessionScore(0);
    sessionScoreRef.current = 0;
    
    gameStateRef.current = {
      ...gameStateRef.current,
      block: { x: canvasSize.width + canvasSize.width * 0.1 },
      lastTimestamp: 0,
    };
    
    requestAnimationFrame(gameLoop);
  }

  function handleMouseMove(e) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    setMousePos({ x, y });
  }

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp() {
    setIsMouseDown(false);
  }

  function handleTouchStart(e) {
    if (e.touches.length > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const x = (e.touches[0].clientX - rect.left) * scaleX;
      const y = (e.touches[0].clientY - rect.top) * scaleY;
      
      setMousePos({ x, y });
      setIsMouseDown(true);
      
      setTimeout(() => {
        setIsMouseDown(false);
      }, 100);
    }
  }

  return (
    <div className={styles.gameContainer} ref={containerRef}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className={styles.gameArea}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
      />
      <div className={styles.howToPlay}>
        <p>How to Play:</p>
        <p>
          {gameOver || gameWon
            ? 'Press SPACE or UP ARROW or click on the button to play again'
            : sessionPaused
            ? 'Press SPACE or UP ARROW or click on the button to continue'
            : 'Press SPACE or UP ARROW or click on the button to jump'}
        </p>
      </div>
    </div>
  );
}