'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tabs = [
  {
    name: 'Rotation',
    path: '/rotation',
    reference: 'https://www.framer.com/motion/examples/'
  },
  {
    name: 'Shadow',
    path: '/shadow-1',
    reference: 'https://tailwindcss.com/docs/drop-shadow'
  },
  {
    name: 'Animated logo',
    path: '/svg-animation-1',
    reference:
      'https://blog.noelcserepy.com/how-to-animate-svg-paths-with-framer-motion'
  },
  {
    name: 'Bubble button',
    path: '/bubble-button',
    source: 'https://codepen.io/soulwire/pen/neJZgM'
  }
];

export const Credits = () => {
  const pathname = usePathname();
  const currentTab = tabs.find(({ path }) => pathname.startsWith(path));

  return (
    <div className="absolute right-0 bottom-0 text-white font-bold">
      {currentTab?.reference ? (
        <span>
          Reference:
          <a
            className="text-yellow-300 px-2"
            href={currentTab.reference}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentTab.reference}
          </a>
        </span>
      ) : null}
      {currentTab?.source ? (
        <span>
          Adapted from:
          <a
            className="text-yellow-300 px-2"
            href={currentTab.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentTab.source}
          </a>
        </span>
      ) : null}
    </div>
  );
};
