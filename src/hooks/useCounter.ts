import { useEffect, useState } from 'react';

const easeOut = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

interface ICounter {
  targetNum: number;
  startNum: number;
  duration: number;
}

export const useCounter = ({ targetNum, startNum, duration }: ICounter) => {
  const [count, setCount] = useState(startNum);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNum = startNum;
    const counter = setInterval(() => {
      const progress = easeOut(++currentNum / totalFrame);
      setCount(Math.round(targetNum * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [targetNum, frameRate, startNum, totalFrame]);

  return count;
};
