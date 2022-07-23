import React from 'react';
import { useState } from 'react';
import s from './Counter.module.css';



export function Counter() {

  const [count, setCount] = useState<number>(0);

  const onClickHandlerPlus = () => {
    count !== 5 ? setCount(count + 1) : setCount(count)


  }

  const onClickHandlerMinus = () => {
    count ? setCount(count - 1) : setCount(count)

  }
  const onClickHandlerDel = () => {
    setCount(0)

  }




  return <div className={s.app}>
    <div className={s.contener}>
      <h1>{count}💰</h1>
      <button className={s.plus} onClick={onClickHandlerPlus}>+  💰</button>
      <button className={s.minus} onClick={onClickHandlerMinus}> -  💰 </button>
      <button className={s.del} onClick={onClickHandlerDel}>🔴</button>
    </div>
    <span className={s.bag}>💰</span>
    <span className={s.bag}>💰</span>
    <span className={s.bag}>💰</span>

  </div>
}