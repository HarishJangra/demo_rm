import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground} from "react-native";
import LoadingActionContainer from "../../Components/LoadingActionContainer";
import { Container, Section, HeadingX, ListItem } from "../../Components";
import colors from "../../Themes/Colors";
import NavigationStyles from "../../Styles/NavigationStyles";
import NavigationService from "../../Navigation";
import useAuth from "../../Services/Auth";
import metrics from "../../Themes/Metrics";
import { FlatList, TouchableNativeFeedback } from "react-native";
import viewStyles from "../../Styles/ViewStyles";
import LinearGradient from 'react-native-linear-gradient'
import Routes from '../../Navigation/Routes/index';
import TrailerButton from "../../Components/TrailerButton";
import MovieDetails from '../../Components/MovieDetails'


const movie = require('../../Fixtures/moviedata.json')



const Header = (props ) => {
	const onWatchTrailer = () => {
		NavigationService.navigate(Routes.SETTINGS_SCREEN)
	}
	
	return (
		<ImageBackground style={{width:metrics.screenWidth, aspectRatio:0.9}} source={{uri:movie.banner}} >
			<Container style={{alignItems:'center'}}>
				<Text style={{color:'white', marginTop:metrics.s3}}> Pull To Refresh </Text>
			</Container>
		
			<LinearGradient 
				start={{x: 0, y: 0}} 
				end={{x: 0, y: 0.8}} 
				colors={['rgba(0,0,0,0)', 'black']} 
				style={[viewStyles.container, viewStyles.center]}
				>
				
				<HeadingX style={{ marginBottom:0, fontSize:metrics.h3,color:'white'}}> {movie.name} </HeadingX>
				
				<MovieDetails movie={movie}/>

				<TrailerButton
					label='Watch Trailer'
					onPress={onWatchTrailer}
				/>
			</LinearGradient>
		</ImageBackground>
	)
}

const renderTeaser  = (item) => {
	return(
		<ListItem teaser = {item.item}/>
	)
}

const MainScreen = ({navigation}) => {
	const { state, logout } = useAuth();

	const [refreshing, onRefresh] = useState(true) 

	useEffect(() => {
		navigation.setParams({headerColor: colors.header})		
		_refresh()
	}, [])


	const _refresh = () => {
		onRefresh(true)
		setTimeout(()=> {
			onRefresh && onRefresh(false)
		}, 800)
	}

	


	return (
		<LoadingActionContainer fixed>
			<FlatList
				ListHeaderComponent={Header}
				keyExtractor={(item)=>item.id+item.user }
				renderItem={renderTeaser}
				refreshing={refreshing}
				onRefresh={ _refresh}
				progressViewOffset={50}

				data={movie.teasers}		
			/>

		</LoadingActionContainer>
	);
};

MainScreen.navigationOptions = ({navigation})=> {
	// console.log('LOG_navigagtion',navigation);
	return {
		headerStyle:[{backgroundColor:"transparent",height:0}],
        headerTitle: "",
        headerTintColor:['teal'],
		headerTitleStyle: {
			width: 100,
			fontWeight: "700"
		}	
	}
}

export default MainScreen
