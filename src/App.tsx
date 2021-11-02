import { messageText, testReducer } from "./redux/app/appSlice";
import { useAppSelector, useAppDispatch } from "./redux/ReduxHooks";

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
