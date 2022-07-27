import {AuthContext} from "../../../contexts/AuthContext";
import {useOutsideAlert} from "../../../hooks/useOutsideAlert";
import styles from "./hamburger.module.scss"

import hamburger from "../../../images/hamburger.svg"
import hamburgerClose from "../../../images/hamburgerClose.svg"

import {menuData} from "./menuData";

import {useContext, useState} from "react";
import {Link} from "react-router-dom";

const Hamburger = () => {
	const {setIsAuth} = useContext(AuthContext)
	const {ref, isComponentVisible, setComponentVisible} = useOutsideAlert(true)
	const handleLogout = () => {
		localStorage.removeItem('token')
		setIsAuth(false)
		setComponentVisible(false)
	}
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
					<button onClick={handleLogout}>Log out</button>
				</li>
			</ul>
		</div>
	
	
	);
};

export default Hamburger;