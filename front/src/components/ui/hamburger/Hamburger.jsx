import {useOutsideAlert} from "../../../hooks/useOutsideAlert";
import styles from "./hamburger.module.scss"

import hamburger from "../../../images/hamburger.svg"
import hamburgerClose from "../../../images/hamburgerClose.svg"

import {menuData} from "./menuData";

import {useState} from "react";
import {Link} from "react-router-dom";

const Hamburger = () => {
  
    const [show, setShow] = useState(true)
    const {ref,isComponentVisible,setComponentVisible} =useOutsideAlert(true)
  
    return (
        <div className={styles.hamburger} ref={ref}>
            <button onClick={() => setComponentVisible(!isComponentVisible)}>
                <img
                    src={isComponentVisible ? hamburger : hamburgerClose}
                    alt="hamburger"
                    height={40}
                />
            </button>
            <ul className={`${styles.menu} ${!isComponentVisible ? styles.active : ''}`}>
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