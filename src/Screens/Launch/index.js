import React from "react";
import { Text, ActivityIndicator } from "react-native";
import colors from "../../Themes/Colors";
import { Container } from "../../Components";
import { PlayLaunchIcon } from "../../Components/PlayIcon";

export default function() {
	return (
		<Container
			style={{
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: colors.background
			}}
		>
			<PlayLaunchIcon />
		</Container>
	);
}
