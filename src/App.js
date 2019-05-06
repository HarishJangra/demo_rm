import React from "react";
import { StatusBar } from "react-native";
import NavigationService from "./Navigation";
import createStore from "./Store";
import { StoreProvider } from "easy-peasy";
import PrimaryNav from "./Navigation/AppNavigation";
import { AppContextProvider } from "./Services/Auth/AppContext";
import { Screen } from "./Components";
import colors from "./Themes/Colors";

//create the easy store
const store = createStore();

//return root component
export default () => {
	return (
		<Screen>			
			<StoreProvider store={store}>
				<StatusBar  backgroundColor={"rgba(0,0,0,0.9)"}/>
				{/* auth context usage here for login and logout */}
				<AppContextProvider>
				{/* navigation screen init*/}
					<PrimaryNav
							ref={nav => NavigationService.setTopLevelNavigator(nav)}
						/>
					</AppContextProvider>

			</StoreProvider>
		</Screen>
	);
};

