import React from 'react'
import { View, StyleSheet } from 'react-native';
import { IconX } from '../Icons';
import viewStyles from '../Styles/ViewStyles';
import metrics from '../Themes/Metrics';

export default ({icon, width}) => {
     let sty = width ? {width, height:width} : {}
    return (
        <View style={[styles.container, viewStyles.center ,sty]}>
            <IconX name="ios-play" color='red' size={icon || 16}/>
        </View>
    )
}

export const PlayLaunchIcon = () => {
    return(
        <View style={[styles.bigContainer, viewStyles.center ]}>
            <IconX name="ios-play" color='red' size={48}/>
        </View>   
    )
}


const styles = StyleSheet.create({
    container:{
        width:24,
        height:24,
        marginRight:metrics.s2,
        borderRadius:999,
        borderWidth:1,
        borderColor:'black',        
    },
     bigContainer:{
        width:80,
        height:80,
        elevation:2,
        backgroundColor:'white',
        marginRight:metrics.s2,
        borderRadius:24,
        borderWidth:1,
        borderColor:'#fafafa',   
     }
})