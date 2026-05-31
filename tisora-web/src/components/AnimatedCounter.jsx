import { useState, useEffect, useRef } from 'react';

function parseNumberString(str) {
  // Remove commas to find the raw numeric value
  const cleanStr = str.replace(/,/g, '');
  // Match any sequence of digits
  const numMatch = cleanStr.match(/\d+/);
  if (!numMatch) return { target: 0, prefix: '', suffix: str, hasCommas: false };
  
  const target = parseInt(numMatch[0], 10);
  const numIndex = cleanStr.indexOf(numMatch[0]);
  const prefix = cleanStr.substring(0, numIndex);
  const suffix = cleanStr.substring(numIndex + numMatch[0].length);
  const hasCommas = str.includes(',');
  
  return { target, prefix, suffix, hasCommas };
}

function formatNumber(val, hasCommas, prefix, suffix) {
  const formattedVal = Math.floor(val);
  const formattedStr = hasCommas ? formattedVal.toLocaleString('en-US') : formattedVal.toString();
  return `${prefix}${formattedStr}${suffix}`;
}

export default function AnimatedCounter({ value, duration = 2000 }) {
  const { target, prefix, suffix, hasCommas } = parseNumberString(value);
  const [displayValue, setDisplayValue] = useState(formatNumber(0, hasCommas, prefix, suffix));
  const elementRef = useRef(null);
  const animatedRef = useRef(false);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [value, duration]);

  const startAnimation = () => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo easing function for premium feel
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentValue = easeProgress * target;
      setDisplayValue(formatNumber(currentValue, hasCommas, prefix, suffix));

      if (progress < 1) {
        animationFrameIdRef.current = window.requestAnimationFrame(step);
      }
    };

    animationFrameIdRef.current = window.requestAnimationFrame(step);
  };

  return <span ref={elementRef}>{displayValue}</span>;
}
