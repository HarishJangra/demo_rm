import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import metrics from '../Themes/Metrics';
import viewStyles from '../Styles/ViewStyles';
import colors from '../Themes/Colors';
import { IconX, ICON_TYPE } from '../Icons/index';

export const Info=({info}) => {
    return <Text style={styles.infoText} > { info}</Text>
}

export const IconDot = props => {
    return <IconX style={{marginHorizontal:metrics.s1}} size={12} name="dot-single" origin={ICON_TYPE.ENTYPO} color={colors.info}/>
}

export default ({movie}) => {
 	return(
		<View style={[styles.container, viewStyles.center]}>
            <Info  info={movie.year_released}/>
            <IconDot/>

            <Info info={movie.age_restriction}/>
            <IconDot/>

            <Info info={movie.playtime} />

            
		</View>
	)
}

const styles = StyleSheet.create({
    container:{
        marginVertical:metrics.s2,
        padding:metrics.s1,
        flexDirection:'row'        
    },

    infoText:{
        fontSize:metrics.small,
        color:colors.info
    }
})