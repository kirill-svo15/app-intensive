import {useState} from "react";
import App from "../App";
import {AuthContext} from "../contexts/AuthContext";

export const AuthProvider = ()=>{
	const [isAuth,setIsAuth]=useState(!!localStorage.getItem('token'))
	return <AuthContext.Provider value={{isAuth,setIsAuth}}>
		<App/>
	</AuthContext.Provider>
}