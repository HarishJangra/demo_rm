import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import metrics from '../Themes/Metrics';
import {IconX} from '../Icons'
import { ICON_TYPE } from '../Icons/index';
import colors from '../Themes/Colors';
import { TouchableNativeFeedback } from 'react-native';

export default ({checked, renderLabel, label, onChange} ) => {
    
   const  _onToggle = () => {
        onChange && 
        onChange(!checked ? true : false)
    }

    return (
     <TouchableNativeFeedback  onPress={_onToggle}>
     <View style={Styles.container}>
     <IconX
         origin={ICON_TYPE.MATERIAL_ICONS}
         name={checked ? "check-box" : "check-box-outline-blank"}
         color={checked && colors.primary}
         />
     {
         renderLabel ? 
             renderLabel() 
         : 
        <View style={Styles.textContainer}>
            <Text style={Styles.label}>
                {label}
            </Text>
        </View>
     }
     </View>
     </TouchableNativeFeedback>
    )
}


const Styles = StyleSheet.create({
    
    container:{
        marginTop:metrics.s3,
        paddingVertical:metrics.s2,
        flexDirection:'row',
        alignItems:'center',        
    },
    textContainer:{
        flexShrink: 1,
        marginLeft:metrics.s3,
        flexDirection:'row',
    },
    label : {
        fontSize:metrics.small,
        color:'#9a9a9a',
    }
})