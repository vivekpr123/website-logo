// src/AnimatedLogo.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  const [showWord, setShowWord] = useState(false);

  // Trigger to start "STYLO" word appearance after "S" animation completes
  const handleSAnimationComplete = () => {
    setShowWord(true);
  };

  return (
    <div className="container">
      {/* Letter 'S' Animation */}
      <motion.div
        className="letter-s"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{
          opacity: 1,
          x: "50%",  // Move to the center of the screen horizontally
          y: "50%",  // Move to the center vertically
          rotate: 360, // Rotate 360 degrees
          transition: {
            duration: 3, // Time for the "S" to move and rotate
            ease: "easeInOut",
            onComplete: handleSAnimationComplete, // After "S" animation, show the word "STYLO"
          },
        }}
      >
        S
      </motion.div>

      {/* Word "STYLO" animation */}
      {showWord && (
        <motion.div
          className="word-stylo"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1, // Delay before starting word animation
              duration: 2, // Duration of the "STYLO" appearance
            },
          }}
        >
          <motion.span
            className="letter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5, // Letter-by-letter reveal
                duration: 0.5,
              },
            }}
          >
            S
          </motion.span>
          <motion.span
            className="letter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            }}
          >
            T
          </motion.span>
          <motion.span
            className="letter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 0.5,
              },
            }}
          >
            Y
          </motion.span>
          <motion.span
            className="letter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.5,
              },
            }}
          >
            L
          </motion.span>
          <motion.span
            className="letter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2.5,
                duration: 0.5,
              },
            }}
          >
            O
          </motion.span>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: {
                delay: 3,
                duration: 0.5,
              },
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedLogo;
