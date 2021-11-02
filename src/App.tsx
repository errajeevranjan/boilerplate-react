import { messageText, testReducer } from "reduxStore/app/appSlice";
import { useAppDispatch, useAppSelector } from "reduxStore";

const App = () => {
	const message = useAppSelector(messageText);
	const dispatch = useAppDispatch();
	return (
		<div className='App'>
			Welcome to boilerplate code for react with TS + react-query +
			redux-toolkit + mui.
			<h1>{message}</h1>
			<button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</button>
		</div>
	);
};

export default App;
