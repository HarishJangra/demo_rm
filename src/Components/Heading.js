import React from 'react'
import {Text, StyleSheet} from 'react-native'
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';

export default ({children, style}) => {
    return (
        <Text style={[styles.heading, style]}>
            {children}
        </Text>
    )
}


const styles = StyleSheet.create({
    heading:{
        color:colors.primary,
        fontSize:metrics.h4,
        marginBottom:metrics.s4,
        fontWeight:'bold',        
    }
})