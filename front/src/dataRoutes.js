import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/home/Home";
import NewWorkout from "./components/pages/workout/NewWorkout";

export const routes = [
	{
		path: '/',
		element: <Home/>,
		isAuth: false
	},
	{
		path: '/new-workout',
		element: <NewWorkout/>,
		isAuth: true
	},
	{
		path: '/auth',
		element: <Auth/>,
		isAuth: false
	}
]