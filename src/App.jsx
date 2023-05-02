import './App.css'
import React from 'react'
import { useEffect, useState ,useRef } from 'react'


function App() {


  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 3,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });


  return (
    <div className="applove">
      <h1>Tiempo para ver a mi bb</h1>
      <div className='timer'>
    <p>{timerDays}:</p>
    <p>{timerHours}:</p>
    <p>{timerMinutes}:</p>
    <p>{timerSeconds}</p>
    </div>
      <div className="img">
        <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/logos%2FPrepossess.gif?alt=media&token=bb733d33-19dd-4488-a2da-59c3c594511e" alt="" />
      </div>
    </div>
  )
}

export default App
