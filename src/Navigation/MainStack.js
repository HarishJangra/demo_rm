import { createStackNavigator } from "react-navigation";
import Path from "./Routes";
import Home from "../Screens/Home";
import Settings from '../Screens/Settings'
import EditSetting from '../Screens/Edit/index';

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: Home,		
		},
		[Path.SETTINGS_SCREEN] : {screen:Settings},
		[Path.EDIT_SETTING] : EditSetting
	},
	{
		// Default config for all screens
		headerMode: "float",
		initialRouteName: Path.HOME_SCREEN,
		headerLayoutPreset: "center"
	}
);
