import { createTheme } from "@mui/material/styles";
import { overrides } from "./Overrides";
const { components } = overrides;

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
	components,
});

export const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
	components,
});
