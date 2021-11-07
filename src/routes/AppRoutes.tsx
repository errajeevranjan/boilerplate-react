import HomePage from "pages/homePage/HomePage";
import HomePageTwo from "pages/homePage/HomePageTwo";
import LoginPage from "pages/loginPage/LoginPage";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
	const isAdminLoggedIn = true;
	return (
		<Suspense fallback={"Loading. Please wait..."}>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route
					path='/*'
					element={isAdminLoggedIn ? <HomePage /> : <Navigate to='/login' />} //! private route
				/>
				<Route
					path='/route-2'
					element={<HomePageTwo />} //! public route
				/>
			</Routes>
		</Suspense>
	);
};
export default AppRoutes;
