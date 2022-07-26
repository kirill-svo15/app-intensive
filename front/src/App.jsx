import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./components/pages/404/Error404";
import Home from "./components/pages/home/Home";
import NewWorkout from "./components/pages/workout/NewWorkout";
import Auth from "./components/pages/Auth/Auth";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<Home/>}/>
				<Route path={'/new-workout'} element={<NewWorkout/>}/>
				<Route path={'/auth'} element={<Auth/>}/>
				<Route path={'*'} element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;