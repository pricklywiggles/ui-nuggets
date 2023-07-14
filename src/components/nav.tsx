'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const tabs = [
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

export const Nav = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const pathname = usePathname();

  return (
    <nav className="">
      {tabs.map(({ name, path }, i) => {
        const isActive = pathname.startsWith(path);

        return (
          <div key={name} className="relative">
            {isActive ? (
              <motion.div
                layoutId="selected-tab"
                className="absolute h-full border-l-2 border-white -left-[1rem]"
              />
            ) : null}
            <Link className="nav-link" href={path}>
              {name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
