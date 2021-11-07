import { lazy } from "react";

export const ROUTES = [
	{
		key: "route 1",
		title: "route title for route 1",
		path: "/route-1",
		component: lazy(() => import("pages/homePage/HomePage")),
	},
	{
		key: "route 2",
		title: "route title for route 2",
		path: "/route-2",
		component: lazy(() => import("pages/homePage/HomePageTwo")),
	},
	{
		key: "route 3",
		title: "route title for route 3",
		path: "/route-3",
		component: lazy(() => import("pages/homePage/HomePage")),
	},
	{
		key: "route 4",
		title: "route title for route 4",
		path: "/route-4",
		component: lazy(() => import("pages/homePage/HomePage")),
	},
	{
		key: "route 5",
		title: "route title for route 5",
		path: "/route-5",
		component: lazy(() => import("pages/homePage/HomePage")),
	},
	{
		key: "route 6",
		title: "route title for route 6",
		path: "/route-6",
		component: lazy(() => import("pages/homePage/HomePage")),
	},
];
