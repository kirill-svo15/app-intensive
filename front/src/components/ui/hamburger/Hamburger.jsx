import styles from "./hamburger.module.scss"

import hamburger from "../../../images/hamburger.svg"
import hamburgerClose from "../../../images/hamburgerClose.svg"

import {menuData} from "./menuData";

import {useState} from "react";
import {Link} from "react-router-dom";

const Hamburger = () => {
    const [show, setShow] = useState(true)
    return (
        <div className={styles.hamburger}>
            <button onClick={() => setShow(!show)}>
                <img
                    src={show ? hamburger : hamburgerClose}
                    alt="hamburger"
                    height={40}
                />
            </button>
            <ul className={`${styles.menu} ${!show ? styles.active : ''}`}>
                {menuData.map((item, idx) => (
                    <li key={`_menu_${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                <li>
                    <button>Log out</button>
                </li>
            </ul>
        </div>


    );
};

export default Hamburger;