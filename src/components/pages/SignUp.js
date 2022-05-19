import React, { useState} from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import styles from "./Login.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const redirectInUrl = new URLSearchParams().get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/login2";
  return (
    <div>
      <LoginHeader />
      <form  className={styles.form}>
        <div className={styles.heading}>
          <h2>Sign Up</h2>
          <h4>Create an account for free</h4>
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
        <label htmlFor="confirmPassword">
          <span>Confirm Password:</span>
          <input
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className={styles.btn}>Sign up</button>
        <div>
          <label>
            Already have an account?{" "}
            <Link to={`/login?redirect=${redirect}`}>Login</Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
