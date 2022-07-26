import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

const UseAuth = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	return {
		isAuth,setIsAuth
	}
}

export default UseAuth