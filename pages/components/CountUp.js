import { useEffect, useState, useRef } from 'react';
import useIsVisible from '../hooks/useIsVisible';

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {count === end && <span dangerouslySetInnerHTML={{ __html: '&#43' }} />}
    </span>
  );
};

export default CountUp;
