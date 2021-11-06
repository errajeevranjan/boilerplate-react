import HomePage from "pages/homePage/HomePage";
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
					element={isAdminLoggedIn ? <HomePage /> : <Navigate to='/login' />}
				/>
			</Routes>
		</Suspense>
	);
};
export default AppRoutes;
