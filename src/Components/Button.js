import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

export default ({label, style , onPress, color, bg, textSyle}) => {
    const bgstyle = bg ? {backgroundColor:bg} : {}
    const colorstyle = color ? {color} : {}

    return(
        <TouchableNativeFeedback  onPress={()=> {
            onPress && onPress()
        }}>
            <View style={[styles.container,bgstyle,style]}>
                <Text style={[styles.label, colorstyle, textSyle]}>{label}</Text>
            </View>
        </TouchableNativeFeedback>
        )
}

const styles=StyleSheet.create({
    container:{
        padding:metrics.s3,
        alignItems:'center',
        backgroundColor:colors.primary,
        justifyContent:'center'
    } ,
    label:{
        fontSize:metrics.h6,
        letterSpacing:1,
        color:colors.white        
    }
})