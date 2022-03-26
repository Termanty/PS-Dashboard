import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

import React from 'react';

const Navbar = () => {
    const {logout} = Logout();
    const {user}= useAuthContext();
    return (<div>
        <nav className={styles.navbar}>
            <ul>
                
                <Link className={styles.navbar_logo} to="/">Logo</Link> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="product">Products</Link></li>
                <li><Link to="free_tools">Free Tools</Link></li>
                <li><Link to="blog">Blog</Link></li>

                <li className={styles.dashboard}>
                    <Link to="dashboard">Dashboard</Link>
                </li>
                {!user && (
                <>
                <li><Link to="login">Login</Link></li>
                <li><Link to="signup">SignUp</Link></li>
                </>
                )}
                {user && (
                    <>
                    <li>hello, {user.displayName}</li>
                <li><button className="btn" onClick={logout}>Logout</button></li>
                </>
                )}
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
