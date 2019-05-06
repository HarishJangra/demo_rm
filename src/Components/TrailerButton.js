import React from 'react'
import {View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import viewStyles from '../Styles/ViewStyles';
import PlayIcon from './PlayIcon'
import metrics from '../Themes/Metrics';


export default ( {label, onPress}) => {
    
    return (
        <TouchableNativeFeedback  onPress={()=> {
            onPress && onPress()
        }}>
        <View style={[viewStyles.center , styles.container, viewStyles.row]}>
            <PlayIcon/>   
        <View style={styles.labelHolder}>
                <Text style={styles.label}> {label} </Text>
            </View>
        </View>
    </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:metrics.s2, 
        borderRadius:4,
        backgroundColor:'white',
    },
    labelHolder:{
        flexShrink: 1,
    },
    label:{
        fontWeight:'bold', 
        color:'black',
        fontSize:metrics.small
    }
})