'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [toggler, setToggler] = React.useState(false);

  return (
    <main className="">
      <div className="bubble-button">
        <button>
          <span className="label">🎈</span>
        </button>
      </div>
    </main>
  );
}

// source: https://blog.noelcserepy.com/how-to-animate-svg-paths-with-framer-motion
