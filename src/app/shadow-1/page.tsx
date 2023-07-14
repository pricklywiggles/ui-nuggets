'use client';
import * as React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [toggler, setToggler] = React.useState(false);
  return (
    <div className="component-shadow-1">
      <div className="flex flex-col justify-center w-[400px] h-[400px] rounded-2xl bg-gray-50">
        <div className="card c-shadow-lg"></div>
      </div>
    </div>
  );
}
