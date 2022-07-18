import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import NewWorkout from "./components/pages/workout/NewWorkout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/new-workout'} element={<NewWorkout/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;