import { useEffect, useState } from "react";
import s from './app.module.css'

const START_TIMER = 30

export default function () {

  // const [seconds, setSeconds] = useState(START_TIMER)
  // const [isRunning, setIsRunning] = useState(true)

  // useEffect(() => {
  //   if(!isRunning || seconds <= 0) return;

  //   let interval = setTimeout(() => {
  //     setSeconds(prev => prev - 1)
  //   }, 1000)

  //   return () => clearTimeout(interval)
  // }, [seconds, isRunning])

  // const toggle = () => setIsRunning((prev) => !prev)

  // const addSec = () => {
  //   setSeconds(prev => prev + 5)
  // }

  // const resetTimer = () => {
  //   setSeconds(START_TIMER)
  //   setIsRunning(true)
  // }

  // const [count, setCount] = useState(0)
  // // let count = 0

  // const onPlus = () => {
  //   // count++
  //   setCount(prev => prev + 1)
  //   setCount(prev => prev + 0)
  //   console.log(count);
  // }

  // const onMinus = () => {
  //   if(count > 0){
  //     setCount(prev => prev - 1)
  //   }
  // }

  // const del = () => {
  //   setCount(0)
  // }




  return (
    <div>
      {/* <h2>{seconds}</h2>
      <button onClick={toggle}>{isRunning ? 'stop' : 'start'}</button>
      <button onClick={addSec}>+ 5</button>
      <button onClick={resetTimer}> del </button> */}
      {/* <button onClick={onPlus}>dop +1</button>
      <button onClick={onMinus}>dop -1</button>
      <button onClick={del}>del</button> */}
      <button className={s.btn_m}>dd</button>
    </div>
  )
}
 
