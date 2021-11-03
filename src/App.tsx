import {
	messageText,
	testReducer,
	darkModeStatus,
	themeReducer,
} from "reduxStore/app/appSlice";
import { useAppDispatch, useAppSelector } from "reduxStore";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "theme/Theme";
import { Button, Paper } from "@mui/material";

const App = () => {
	const message = useAppSelector(messageText);
	const isDarkModeActive = useAppSelector(darkModeStatus);
	const dispatch = useAppDispatch();

	return (
		<ThemeProvider theme={isDarkModeActive ? darkTheme : lightTheme}>
			<Paper sx={{ height: "100vh" }}>
				Welcome to boilerplate code for react with TS + react-query +
				redux-toolkit + mui.
				<h1>{message}</h1>
				<button onClick={() => dispatch(testReducer())}>
					Test if reducer is working or not
				</button>
				<Button
					variant='contained'
					color='secondary'
					onClick={() => dispatch(themeReducer())}>
					Toggle Theme
				</Button>
			</Paper>
		</ThemeProvider>
	);
};

export default App;
