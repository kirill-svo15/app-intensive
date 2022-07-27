import styles from "./header.module.scss"

import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import userLogo from "../../../images/user.svg"
import authImage from "../../../images/dumbbell.svg"

import arrow from "../../../images/arrow.svg"

import Hamburger from "../../ui/hamburger/Hamburger";

const Header = () => {
	
	const location = useLocation()
	const navigate = useNavigate()
	
	const {isAuth} = useAuth()
	
	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button onClick={() => navigate(-1)}>
					<img src={arrow} alt="arrow"/>
				</button>
			
			) : (
				<Link to={isAuth ? '/profile' : '/auth'}>
					<img src={isAuth ? authImage : userLogo} alt="user" height='40px' width='40px'/>
				</Link>
			)}
			
			<Hamburger/>
		</header>
	);
};

export default Header;