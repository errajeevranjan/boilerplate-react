import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "reduxStore";
import "styles/globalStyles.scss";
import { ReactLocation, Router } from "react-location";

import { ReactLocationDevtools } from "react-location-devtools";
import { appRoutes } from "routes/AppRoutes";
const location = new ReactLocation();

const queryClient = new QueryClient();
ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Router location={location} routes={appRoutes}>
					<App />
					<ReactLocationDevtools position='bottom-right' />
				</Router>
			</Provider>
			<ReactQueryDevtools
			// initialIsOpen //! uncomment this to keep react-query-dev-tools open by default
			/>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
