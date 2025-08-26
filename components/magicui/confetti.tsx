"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button"; // Using ShadCN Button
import confetti, { type Options as ConfettiOptions } from "canvas-confetti";

interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options?: ConfettiOptions;
}

export function ConfettiButton({
  children,
  options,
  className,
  ...props
}: ConfettiButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);

  const fireConfetti = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);

    const duration = 1_000; // 1 second animation
    const end = Date.now() + duration;

    const frame = () => {
      if (Date.now() > end) {
        setIsAnimating(false);
        return;
      }

      confetti({
        particleCount: 4,
        startVelocity: 15,
        spread: 45,
        origin: { y: 0.7 },
        ...options,
      });

      animationRef.current = requestAnimationFrame(frame);
    };

    frame();
  }, [isAnimating, options]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <Button
      {...props}
      className={`relative overflow-hidden px-6 py-3 rounded-lg bg-purple-700 text-white font-bold hover:bg-purple-800 transition ${className}`}
      onClick={(e) => {
        fireConfetti();
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </Button>
  );
}
