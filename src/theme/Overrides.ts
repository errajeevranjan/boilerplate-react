// override material-ui styles
import { createTheme } from "@mui/material/styles";

export const overrides = createTheme({
	// overriding material ui button styles
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					textTransform: "capitalize",
				},
			},
		},
		// overriding material ui card styles
		MuiCardContent: {
			styleOverrides: {
				root: {
					":last-child": { paddingBottom: "1rem" },
				},
			},
		},
		// overriding material ui listItem styles
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					minWidth: "45px",
				},
			},
		},
	},
});
