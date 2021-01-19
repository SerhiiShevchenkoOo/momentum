import React from "react";
import useNewTimer from './useNewTimer.jsx';
import twStyles from '../stylesJs/styleComponent';

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const Clock = () => {
  const timer = useNewTimer(new Date());
  return (
    <section className={twStyles.cloks}>
      <h2 className=''>{timer.toLocaleTimeString()}</h2>
      <div className='flex justify-center  text-xl leading-4 sm:text-2xl'>
        <span>{week[timer.getDay()]}</span>&nbsp;
        <span>{timer.getDate()}</span>&nbsp;
        <span>{months[timer.getMonth()]}</span>
      </div> 
    </section>
  );
};

export default Clock
