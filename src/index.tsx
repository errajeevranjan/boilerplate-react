import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "reduxStore";
import "styles/globalStyles.scss";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<App />
			</Provider>
			<ReactQueryDevtools
			// initialIsOpen //! uncomment this to keep react-query-dev-tools open by default
			/>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
