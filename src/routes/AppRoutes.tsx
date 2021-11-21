import HomePage from "pages/homePage/HomePage";
import HomePageTwo from "pages/homePage/HomePageTwo";
import { Navigate, Route } from "react-location";

export const appRoutes: Route[] = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/route-1",
		element: <HomePage />,
	},
	{
		path: "/route-2",
		element: <HomePageTwo />,
	},
	{
		path: "/route-3",
		element: <HomePage />,
	},
	{
		path: "/route-4",
		element: <HomePageTwo />,
	},
	{
		path: "/route-5",
		element: <HomePage />,
	},
	{
		path: "/route-6",
		element: <HomePageTwo />,
	},
	{
		element: <Navigate to='/' />,
	},
];
