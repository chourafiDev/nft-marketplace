import { useState, useEffect } from "react";
import { getRemainingTimeUntilMSTimestamp } from "./utils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Timer = ({ countDownTimestampMS }: { countDownTimestampMS: number }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimestampMS);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTimestampMS]);

  function updateRemainingTime(coundDown: number) {
    setRemainingTime(getRemainingTimeUntilMSTimestamp(coundDown));
  }

  return (
    <div className="flex items-center mt-5">
      <div className="w-14 flex justify-center">
        <div className="text-center">
          <span className="text-white font-semibold bg-dark/70 text-lg px-3 py-1 rounded-md time-w">
            {remainingTime.days}
          </span>
          <p className="text-light mt-1 text-[14px]">DAY</p>
        </div>

        <span className="text-light ml-[2px]">:</span>
      </div>
      <div className="w-14 flex justify-center">
        <div className="text-center">
          <span className="text-white font-semibold bg-dark/70 text-lg px-3 py-1 rounded-md time-w">
            {remainingTime.hours}
          </span>
          <p className="text-light mt-1 text-center text-[14px]">HR&apos;S</p>
        </div>

        <span className="text-light ml-[2px]">:</span>
      </div>
      <div className="w-14 flex justify-center">
        <div className="text-center">
          <span className="text-white font-semibold bg-dark/70 text-lg px-3 py-1 rounded-md time-w">
            {remainingTime.minutes}
          </span>
          <p className="text-light mt-1 text-center text-[14px]">MIN&apos;S</p>
        </div>

        <span className="text-light ml-[2px]">:</span>
      </div>
      <div className="w-14 flex justify-center">
        <div className="text-center">
          <span className="text-white font-semibold bg-dark/70 text-lg px-3 py-1 rounded-md time-w">
            {remainingTime.seconds}
          </span>
          <p className="text-light mt-1 text-center text-[14px]">SEC</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
