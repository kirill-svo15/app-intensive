import styles from "./header.module.scss"

import {Link, useLocation, useNavigate} from "react-router-dom";

import userLogo from "../../../images/user.svg"
import arrow from "../../../images/arrow.svg"

import Hamburger from "../../ui/hamburger/Hamburger";

const Header = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const auth = true

    return (
        <header className={styles.header} >
            {location.pathname !== '/' ? (
                <button onClick={()=>navigate(-1)}>
                    <img src={arrow} alt="user"/>
                </button>

                ) : (
                <Link to={'/profile'}>
                <img src={userLogo} alt="user"/>
                </Link>
            )}

           <Hamburger/>
        </header>
    );
};

export default Header;