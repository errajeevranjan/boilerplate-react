import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';


export interface AppState {
  message: string;
  status: 'idle' | 'loading' | 'failed';
  isDarkModeActive:boolean;
}

const initialState: AppState = {
  message: 'If you can see this message then you have working redux setup!',
  status: 'idle',
  isDarkModeActive:false,

};



export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    testReducer: (state) => {
      state.message = 'If you can see this message then your reducer setup is correct!';
    },

    themeReducer:(state)=>{
      state.isDarkModeActive=!state.isDarkModeActive
    }

  },

});

// exporting reducer so that we can dispatch this in desired page(s) which then will trigger associated action with the reducer
export const { testReducer,themeReducer } = appSlice.actions;

// exporting value of message for consumption by page(s)
export const messageText = (state: RootState) => state.app.message;
export const darkModeStatus = (state:RootState)=> state.app.isDarkModeActive

// exporting the entire slice
export default appSlice.reducer;
