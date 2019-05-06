import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

const metrics = {
	s1: 5,
	s2: 8,
	s3: 16,
	s4: 20,
	s5: 30,
	s6: 40,

	h1: 48,
	h2: 32,
	h3: 24,
	h4: 20,
	h5: 18,
	h6: 16,
	small:14,
	tiny: 10,

	horizontalLineHeight: 1,

	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,

	navBarHeight: Platform.OS === "ios" ? 64 : 54,

	icons: {
		tiny: 15,
		small: 20,
		medium: 30,
		large: 45,
		xl: 50
	},

	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	}
};

export default metrics;
