import { useEffect, useState } from 'react';

interface ITimer {
  delay: number;
}

export const useTimer = ({ delay }: ITimer) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let progress = 0;

    const timer = setInterval(() => {
      progress += 1;
      setStep(progress);

      if (progress > 3) {
        clearInterval(timer);
      }
    }, delay);
  }, [delay]);

  return step;
};
