'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [toggler, setToggler] = React.useState(false);
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        key={toggler ? 'a' : 'b'}
        className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      />
      <button
        className="mx-auto text-gray-200"
        onClick={() => setToggler(!toggler)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}
