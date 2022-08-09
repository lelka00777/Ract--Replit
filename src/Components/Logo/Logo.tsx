import React from 'react';
import s from './Logo.module.css';
export const Logo = () => {
  return (<div className={s.contener}>


    <div className={s.logo}>
      <div className={s.oval}></div>
      <div className={s.vertikal}></div>
      <div className={s.gorizont}></div>
    </div>
  </div>);
};