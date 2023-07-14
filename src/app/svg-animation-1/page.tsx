'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [toggler, setToggler] = React.useState(false);

  return (
    <main className="">
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 35 40"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          strokeWidth={0.5}
          strokeLinecap={'round'}
          strokeDasharray="0 1"
          d="M17.9966 39.1338L34.3247 29.6706L34.2922 9.87187L17.1292 0L0 9.9281L0.032495 29.7268L13.0075 37.1904L16.8555 39.4037V20.5498H25.8913V16.4419H4.58537V20.5498H13.0075V32.865L3.77803 27.556L3.75303 12.0864L17.1367 4.33042L30.5467 12.0427L30.5717 27.5122L17.9966 34.8008V39.1338Z"
          fill="transparent"
          stroke="hsla( 175, 35%, 49%, 100%)"
        />
      </motion.svg>
    </main>
  );
}

// source: https://blog.noelcserepy.com/how-to-animate-svg-paths-with-framer-motion
