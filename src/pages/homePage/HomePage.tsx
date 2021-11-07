import { Button } from "@mui/material";
import { TestImage } from "assets";
import { useAppDispatch, useAppSelector } from "reduxStore";
import { appDataInReduxStore, testReducer } from "reduxStore/app/appSlice";

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { message } = useAppSelector(appDataInReduxStore);

	return (
		<>
			This is home page of the app Welcome to boilerplate code for react with TS
			+ react-query + redux-toolkit + mui.
			<h1>{message}</h1>
			<Button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</Button>
			<img src={TestImage} alt='testImage' />
		</>
	);
};

export default HomePage;
