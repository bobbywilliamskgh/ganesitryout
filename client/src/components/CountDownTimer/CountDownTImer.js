import React from "react";

const CountDownTimer = ({ onSubmitTest }) => {
  const hoursMinSecs = {
    hours: 0,
    minutes: 0,
    seconds: 30,
  };
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    // if (hrs === 0 && mins === 0 && secs === 0) reset();
    if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  // const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    if (hrs === 0 && mins === 0 && secs === 0) {
      clearInterval(timerId);
      onSubmitTest();
      console.log("hei");
    }
    return () => clearInterval(timerId);
  }, [secs]);

  return (
    <div className="ba center mt4 pa2 f3" style={{ width: "fit-content" }}>
      {hours === 0 && mins < 5 ? (
        <p className="ma0 red">{`${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
      ) : (
        <p className="ma0">{`${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
      )}
    </div>
  );
};

export default CountDownTimer;
