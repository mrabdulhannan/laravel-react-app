import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1>Login to your account</h1>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="password"></input>
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered?
                        <Link to="/signup">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
