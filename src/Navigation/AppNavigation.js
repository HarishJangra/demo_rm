import React from 'react'
import {  createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Path from "./Routes";
import LaunchScreen from "../Screens/Launch";
// Screens Objects
import LoginStack from "./LoginStack";
import MainStack from "./MainStack";

const Root = { screen: LaunchScreen };
// Manifest of possible screens
const PrimaryNav = createAnimatedSwitchNavigator(
	{

		 [Path.MAIN_APP]: MainStack,
		[Path.LOGIN_STACK]: LoginStack,
		[Path.LOADING]: Root
	},
	{
		transition: (
			<Transition.Together>
			  <Transition.Out
				type="slide-left"
				durationMs={200}
				interpolation="easeIn"
			  />
			  <Transition.In type="slide-right" durationMs={200} />
			</Transition.Together>
		  ),
		// Default config for all screens
		headerMode: "none",
		initialRouteName: Path.LOADING,
		navigationOptions: {
		}
	}
);

export default createAppContainer(PrimaryNav);
