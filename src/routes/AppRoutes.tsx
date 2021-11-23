import HomePage from "pages/homePage/HomePage";
import HomePageTwo from "pages/homePage/HomePageTwo";
import { Navigate, Route } from "react-location";

const authenticated = true;

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
		path: "/authenticated",
		element: authenticated ? (
			<h1>You will only see this if you are authenticated</h1>
		) : (
			<h1>
				You will need to turn value of authenticated to <b>true</b> in
				Approutes.tsx file to access this route{" "}
			</h1>
		),
	},
	{
		element: <Navigate to='/' />,
	},
];
