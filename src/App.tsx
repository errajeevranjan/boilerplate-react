import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Navigation from "components/navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { useAppSelector } from "reduxStore";
import { appDataInReduxStore } from "reduxStore/app/appSlice";
import AppRoutes from "routes/AppRoutes";
import { darkTheme, lightTheme } from "theme/Theme";

const App = () => {
	const { isDarkModeActive } = useAppSelector(appDataInReduxStore);

	return (
		<BrowserRouter>
			<ThemeProvider theme={isDarkModeActive ? darkTheme : lightTheme}>
				<Paper sx={{ height: "100vh" }}>
					<Navigation>
						<AppRoutes />
					</Navigation>
				</Paper>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
