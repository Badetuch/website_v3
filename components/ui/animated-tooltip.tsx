"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipProps {
  item: Item;
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ item }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const springConfig = { stiffness: 100, damping: 100 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <span>Log in</span>
      <AnimatePresence mode="popLayout">
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
              },
            }}
            exit={{ opacity: 0, y: -20, scale: 0.6 }}
            style={{
              translateX: translateX,

              whiteSpace: "nowrap",
            }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 mt-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -top-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-10 w-[40%] z-30 -top-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
            <div className="font-bold text-white relative z-30 text-base">
              {item.name}
            </div>
            <div className="text-white text-xs">{item.designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTooltip;
