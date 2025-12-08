import React, { useState, useEffect, useRef } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!counterRef.current) return;

      const top = counterRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && !hasStarted) {
        setHasStarted(true);
        let current = 0;
        const increment = Math.ceil(target / 50); // adjust speed

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCount(current);
        }, 50); // update every 50ms
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount in case already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [target, hasStarted]);

  return <span ref={counterRef}>{count}</span>;
}

export default Counter;
