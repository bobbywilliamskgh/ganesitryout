import { useEffect, useState } from "react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const CountDownTryoutDay = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    var countDownDate = new Date("Oct 1, 2021 18:30:00").getTime();
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        props.stopCountDown();
        // console.log("timeout");
      }

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // set state
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(x);
  });

  return (
    <div>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="flex justify-center red b">
          {days === 0 ? null : <p className="mr1">{days}hari</p>}
          {hours === 0 ? null : <p className="mr1">{hours}jam</p>}
          {minutes === 0 ? null : <p className="mr1">{minutes}menit</p>}
          <p className="mr1">{seconds}detik</p>
        </div>
      )}
    </div>
  );
};

export default CountDownTryoutDay;
