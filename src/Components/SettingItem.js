import React from 'react'
import {StyleSheet} from 'react-native'
import metrics from '../Themes/Metrics';
import {View,Text} from 'react-native'
import { TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';
import colors from '../Themes/Colors';


export default ({label, value, onEdit}) => {
    return(
        <View  style={[styles.container]}>
            <View style={styles.valueBox}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.value}>{value}</Text>        
            </View>
        {
            onEdit ? 
                <View style={styles.actionBox}>
                    <TouchableOpacity onPress={onEdit}>
                        <Text style={styles.edit}>Edit </Text>
                    </TouchableOpacity>
                </View>

            : null

        }
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:metrics.s3,
        marginVertical:metrics.s1,
        backgroundColor:'white',
        flexDirection:'row',
    },
    valueBox:{
        flex:3,
    },
    actionBox:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    label:{
        fontSize:metrics.small,
        color:colors.info,
    },
    edit:{
        fontSize:12,
        fontWeight:'600',
        color:colors.info
    },
    value:{
        fontSize:metrics.h5,
        color:'black',
        fontWeight:'bold'
    }
})