import {useRef, useEffect} from 'react';
import "./index.css";

export const Form = () => {
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputConfirmPasswordRef = useRef(null);
  useEffect(() => {
    inputEmailRef.current.focus();
  },[]);


  return (
    <div className="container">
      <div>
        <img src="./image/Image1.jpg" />
      </div>
      <div>
        <form>
          <h2>Register Form</h2>
          <input ref={inputNameRef} type="text" placeholder="yourName" onKeyDown={(e)=> {e.preventDefault(); if (e.keyCode === 9) {inputConfirmPasswordRef.current.focus();}}} />
          <input ref={inputEmailRef} type="email" placeholder="emailAddress" onKeyDown={(e)=> {e.preventDefault(); if (e.keyCode === 9) {inputNameRef.current.focus();}}}/>
          <input ref={inputPasswordRef} type="password" placeholder="password" onKeyDown={(e)=> {e.preventDefault(); if (e.keyCode === 9) {inputEmailRef.current.focus();}}} />
          <input ref={inputConfirmPasswordRef} type="password" placeholder="confirmPassword" onKeyDown={(e)=> {e.preventDefault(); if (e.keyCode === 9) {inputPasswordRef.current.focus();}}} />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
