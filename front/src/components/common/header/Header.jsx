import React from 'react';
import userLogo from "../../../images/user.svg"
import hamburger from "../../../images/hamburger.svg"
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="#">
                <img src={userLogo} alt="user"/>
            </a>
            <button>
                <img src={hamburger} alt="hamburger"/>
            </button>
        </header>
    );
};

export default Header;