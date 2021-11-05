import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type InitialState = {
	message: string;
	status: "idle" | "loading" | "failed";
	isDarkModeActive: boolean;
};

const initialState: InitialState = {
	message: "If you can see this message then you have working redux setup!",
	status: "idle",
	isDarkModeActive: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		testReducer: (state) => {
			state.message =
				"If you can see this message then your reducer setup is correct!";
		},

		toggleDarkModeReducer: (state) => {
			state.isDarkModeActive = !state.isDarkModeActive;
		},
	},
});

// exporting reducer so that we can dispatch this in desired page(s) which then will trigger associated action with the reducer
export const { testReducer, toggleDarkModeReducer } = appSlice.actions;

// exporting the app data object for consumption by page(s)
export const appDataInReduxStore = (state: RootState) => state.app;

// exporting the entire slice
export default appSlice.reducer;
