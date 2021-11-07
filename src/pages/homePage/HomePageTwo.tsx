import { Button } from "@mui/material";
import { TestImage } from "assets";
import { useAppDispatch, useAppSelector } from "reduxStore";
import { appDataInReduxStore, testReducer } from "reduxStore/app/appSlice";
import { useState } from "react";
import PositionedSnackbar from "common/mui/PositionedSnackbar";

const HomePageTwo = () => {
	const dispatch = useAppDispatch();
	const { message } = useAppSelector(appDataInReduxStore);
	const [open, setOpen] = useState(false);

	return (
		<>
			This is home page <b> TWO </b> of the app Welcome to boilerplate code for
			react with TS + react-query + redux-toolkit + mui.
			<h1>{message}</h1>
			<Button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</Button>
			<img src={TestImage} alt='testImage' />
			<Button onClick={() => setOpen(!open)}> Check snackbar</Button>
			<PositionedSnackbar
				message='Success: Snackbar is working!'
				messageType='success'
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

export default HomePageTwo;
