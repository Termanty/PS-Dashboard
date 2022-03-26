import React,{ useState } from "react";

import useSignup from "../../hooks/useSignup";

// styles
import styles from "./SignUp.module.css";



const SignUp = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [displayName, setDisplayName] = useState("");

    const {signup, isPending, error} = useSignup();

    const handleSubmit = (e)=>{
        e.preventDefault()
      signup(email, password, displayName)

    }
    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h3>Signup an account</h3>
        <label>
            <span> Name:</span>
            <input type="text"  onChange={(e)=>setDisplayName(e.target.value)} value={displayName}/>
        </label>

        <label>
            <span>email:</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>

        <label>
            <span>password:</span>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </label>

        {!isPending &&<button className="btn">SignUp</button>}
        {isPending && <button className="btn" disabled>Loading</button>}
        {error && <p>{error}</p>}
     </form>
    );
};

export default SignUp;