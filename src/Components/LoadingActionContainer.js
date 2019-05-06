import React from "react";
import { ScrollView,StyleSheet, RefreshControl,ActivityIndicator, View, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import { Container } from "../Components";
import colors from '../Themes/Colors';
import metrics from "../Themes/Metrics";
import { IconX } from "../Icons";

export default ({
	onRefresh,
	loading,
	fixed,
	action,
	renderAction,
	renderHeader,
	noData,
	children,
	...other
}) => {
	return (
		<Container>
			<Header />
			<Content
				onRefresh={onRefresh}
				fixed={fixed}
				loading={loading}
				children={children}
			/>
			<Footer action={action} renderAction={renderAction} />

		</Container>
	);
};

const Content = ({ fixed, children, onRefresh, loading }) => {
	let fallback = () => {};

	return fixed ? (
		<Container>{children}</Container>
	) : (
		<ScrollView
			keyboardShouldPersistTaps={"always"}
			nestedScrollEnabled
			refreshControl={
				<RefreshControl
					enabled={onRefresh ? true : false}
					refreshing={onRefresh && loading ? true : false}
					onRefresh={onRefresh || fallback}
				/>
			}
		>
			{children}
		</ScrollView>
	);
};

const Header = () => {
	return null;
};

const Footer = ({action, renderAction}) => {	
	return renderAction ? renderAction() : action ? (
		<TouchableNativeFeedback 
			onPress={()=> {
				!action.disabled && action.onAction ? action.onAction(): null				
			}}
			>
			<View style={[Styles.footer , action.disabled ? Styles.footerDisabled : Styles.footerActive]}>
				
				<View style={{marginHorizontal : metrics.s3}}>
					<Text style={Styles.actionText}>
						{action.label}
					</Text>
				</View>	

				{
					action.loading ?
					<ActivityIndicator color="white"/> : 

					action.icon ? 
					<IconX
						size={20}
						name={action.icon}
						origin={action.iconOrigin}
						color={'white'}
					/> : null

				}

			</View>
		</TouchableNativeFeedback>
	) : null
};


const Styles = StyleSheet.create({
	footer:{
		padding:20, 
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row'
	},
	footerActive:{
		backgroundColor:colors.primary
	},
	footerDisabled:{
		padding:20, 
		alignItems:'center',
		backgroundColor:colors.disabled
	},
	actionText:{
		color:colors.white,
		fontSize:18,
		
	}
})