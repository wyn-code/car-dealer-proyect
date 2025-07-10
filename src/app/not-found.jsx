// src/app/not-found.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './not-found.css'; // Asegurate de crear este archivo con el CSS

export default function NotFound() {
  const [firstDigit, setFirstDigit] = useState('?');
  const [secondDigit, setSecondDigit] = useState('?');
  const [thirdDigit, setThirdDigit] = useState('?');

  useEffect(() => {
    const randomNum = () => Math.floor(Math.random() * 9) + 1;
    let i = 0;
    const time = 30;

    const loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        setThirdDigit(4);
      } else {
        setThirdDigit(randomNum());
        i++;
      }
    }, time);

    const loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        setSecondDigit(0);
      } else {
        setSecondDigit(randomNum());
        i++;
      }
    }, time);

    const loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        setFirstDigit(4);
      } else {
        setFirstDigit(randomNum());
        i++;
      }
    }, time);

    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []);

  return (
    <div className="error">
      <div className="container-floud">
        <div className="col-xs-12 ground-color text-center">
          <div className="container-error-404">
            <div className="clip">
              <div className="shadow"><span className="digit thirdDigit">{thirdDigit}</span></div>
            </div>
            <div className="clip">
              <div className="shadow"><span className="digit secondDigit">{secondDigit}</span></div>
            </div>
            <div className="clip">
              <div className="shadow"><span className="digit firstDigit">{firstDigit}</span></div>
            </div>
            <div className="msg">OH!<span className="triangle"></span></div>
          </div>
          <h2 className="h1">Sorry! Page not found</h2>
          <Link href="/">
            <button className='home-button' style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
