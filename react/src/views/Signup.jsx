import React from 'react'
import { Link } from "react-router-dom";

export default function Signup() {
  const onSubmit = (ev) =>{
    ev.preventDefault()
  }
  return (
    <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1>Signup for free</h1>
                    <input type="text" placeholder="Full Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="password" placeholder="Confirm Password"></input>
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
