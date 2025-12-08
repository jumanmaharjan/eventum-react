import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Target date (you can replace it with the actual target date)
  const targetDate = new Date("2025-12-24T23:58:58");

  // State to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the remaining time
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Update countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Initial call to update immediately
    updateCountdown();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-counter">
      <div className="counter-time">
        <span className="counter-days">{timeRemaining.days}</span>
        <h6 className="label-text">Days</h6>
      </div>
      <span className="time-symbol">:</span>
      <div className="counter-time">
        <span className="counter-hours">
          {timeRemaining.hours < 10
            ? `0${timeRemaining.hours}`
            : timeRemaining.hours}
        </span>
        <h6 className="label-text">Hours</h6>
      </div>
      <span className="time-symbol">:</span>
      <div className="counter-time">
        <span className="counter-minutes">
          {timeRemaining.minutes < 10
            ? `0${timeRemaining.minutes}`
            : timeRemaining.minutes}
        </span>
        <h6 className="label-text">Minutes</h6>
      </div>
      <span className="time-symbol">:</span>
      <div className="counter-time">
        <span className="counter-seconds">
          {timeRemaining.seconds < 10
            ? `0${timeRemaining.seconds}`
            : timeRemaining.seconds}
        </span>
        <h6 className="label-text">Seconds</h6>
      </div>
    </div>
  );
};

export default CountdownTimer;
