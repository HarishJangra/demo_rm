import { StyleSheet, Platform } from "react-native";
import { isAndroid } from "../Constants";
// import { Colors } from '../../Themes/'
import colors from '../Themes/Colors';

export default StyleSheet.create({
	header: {
		backgroundColor: colors.white,
		height: 56,
	},
});
