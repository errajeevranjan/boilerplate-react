import { Button, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navigation from "components/navigation/Navigation";
import { useAppDispatch, useAppSelector } from "reduxStore";
import {
	appDataInReduxStore,
	testReducer,
	toggleDarkModeReducer,
} from "reduxStore/app/appSlice";
import { darkTheme, lightTheme } from "theme/Theme";

const App = () => {
	// const appDataInReduxStore  = useAppSelector((state) => state.app); //! alternate way to access entire object of certain slice
	const { message, isDarkModeActive } = useAppSelector(appDataInReduxStore);

	const dispatch = useAppDispatch();

	return (
		<ThemeProvider theme={isDarkModeActive ? darkTheme : lightTheme}>
			<Paper sx={{ height: "100vh" }}>
				<Navigation>
					Welcome to boilerplate code for react with TS + react-query +
					redux-toolkit + mui.
					<h1>{message}</h1>
					<button onClick={() => dispatch(testReducer())}>
						Test if reducer is working or not
					</button>
					<Button
						variant='contained'
						color='secondary'
						onClick={() => dispatch(toggleDarkModeReducer())}>
						Toggle Theme
					</Button>
				</Navigation>
			</Paper>
		</ThemeProvider>
	);
};

export default App;
