import { useAppDispatch, useAppSelector } from "reduxStore";
import { appDataInReduxStore, testReducer } from "reduxStore/app/appSlice";

const HomePage = () => {
	// const appDataInReduxStore  = useAppSelector((state) => state.app); //! alternate way to access entire store object of certain slice
	const dispatch = useAppDispatch();
	const { message } = useAppSelector(appDataInReduxStore);

	return (
		<>
			This is home page of the app Welcome to boilerplate code for react with TS
			+ react-query + redux-toolkit + mui.
			<h1>{message}</h1>
			<button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</button>
		</>
	);
};

export default HomePage;
