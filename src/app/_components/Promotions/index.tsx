'use client'

import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'

const Promotions = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        // Set the target date to 7 days from now
        const targetDate = new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 *
            1000
        );
        //targetDate.setDate(targetDate.getDate() + 7);
    
        const updateTimer = () => {
          const now = new Date();
          const difference = Number(targetDate) - Number(now);
    
          if (difference <= 0) {
            clearInterval(intervalId);
            setTime({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0
            }); // Reset timer to 0 when target date is reached
          } else {
            const totalSeconds = Math.floor(difference / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
    
            // Update the state with the remaining time
            setTime({
              days,
              hours,
              minutes,
              seconds
            });
          }
        };
    
        const intervalId = setInterval(updateTimer, 1000);
    
        // Initial call to set the correct time when the component mounts
        updateTimer();
    
        // Cleanup interval on component unmount or when target date is reached
        return () => clearInterval(intervalId);
      }, []);

  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Deals of the Month</h3>
            <p>
                Elevate your meals with the irresistible fusion of Afro-Asian cuisine! Discover an exciting blend of traditional African ingredients and authentic Asian flavors, all in one place. Don’t miss out on this limited-time offer to experience bold, global flavors without leaving your home! 🎁 🛒
            </p>
            <ul className={classes.stats}>
                <CoutDownBox label='Days' value={time.days}/>
                <CoutDownBox label='Hours' value={time.hours}/>
                <CoutDownBox label='Minutes' value={time.minutes}/>
                <CoutDownBox label='Seconds' value={time.seconds}/>
            </ul>
        </div>
    </section>
  )
}
const CoutDownBox =({label, value}:{label:string,value:number})=>{
    return(
        <li className={classes.statbox}>
            <h4>{value}</h4>
            <p>{label}</p>
        </li>
    )
}
export default Promotions