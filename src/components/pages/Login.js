import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginHeader from "./LoginHeader";
// styles
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/signup";
  return (
    <div>
      <LoginHeader />
      <form onSubmit={""} className={styles.form}>
        <div className={styles.heading}>
          <h2>Login</h2>
          <h4>Log in using your credentials</h4>
        </div>
        <label htmlFor="email">
          <span>email:</span>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <span>password:</span>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={styles.btn}>Login</button>
        <div>
          <label>
            Don't have account?{" "}
            <Link to={`/signup?redirect=${redirect}`}>Sign Up</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
