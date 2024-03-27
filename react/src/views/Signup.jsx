import React, { useRef } from 'react'
import { Link } from "react-router-dom";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const onSubmit = (ev) =>{
    ev.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    }
    console.log(payload);
  }
  return (
    <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1>Signup for free</h1>
                    <input ref={nameRef} type="text" placeholder="Full Name"></input>
                    <input ref={emailRef} type="email" placeholder="Email"></input>
                    <input ref={passwordRef} type="password" placeholder="Password"></input>
                    <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password"></input>
                    <button className="btn btn-block">Sign up</button>
                    <p className="message">
                        Already Registered?
                        <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
  )
}
