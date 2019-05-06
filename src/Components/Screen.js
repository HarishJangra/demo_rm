import React from "react";
import viewStyles from "../Styles/ViewStyles";
import ViewX from "./View";

export default ({ style, ...other }) => {
	return (
		<ViewX
			{...other}
			style={[viewStyles.container, style]}
			useSafeAreaView
		/>
	);
};

export const Container = ({ bg ,style, ...other }) => {
	let bgstyle= bg ? {backgroundColor:bg}: {}
	return <ViewX {...other} style={[viewStyles.container, bgstyle , style]} />;
};

export const Box = ({ style, ...other }) => {
	return <ViewX {...other} style={[style]} />;
};
