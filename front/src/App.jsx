import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/pages/404/Error404";
import {routes} from "./dataRoutes";
import useAuth from "./hooks/useAuth";

const App = () => {
	const {isAuth} =useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((el, idx) => {
					if (el.auth && !isAuth) {
						return false
					}
					return (<Route path={el.path} element={el.element} key={idx}/>)
				})}
				<Route path='*' element={<Error404/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;