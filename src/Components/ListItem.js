import React from "react";
import {View, StyleSheet, Text ,Image} from 'react-native'
import metrics from "../Themes/Metrics";
import HeadingX from './Heading'
import colors from '../Themes/Colors';
import { Info, IconDot } from "./MovieDetails";
import viewStyles from "../Styles/ViewStyles";
import PlayIcon from './PlayIcon'
import { TouchableOpacity } from "react-native-gesture-handler";


export default ({ teaser}) => {

    return (
        <View  style={styles.listitem} >
        
        <View style={styles.header}>
          <Text style={styles.headerText}> TEASER {teaser.id} </Text>
        </View>
        <Image source={{uri:teaser.banner}} style={styles.image}/>        

        <View style={styles.footer}>
            <View style={styles.footerLeft}>
                <HeadingX style={{fontSize:metrics.h6, marginBottom:0}}>
                    {teaser.name}
                </HeadingX>
                <View style={[{flexDirection:'row', alignItems:'center'}]}>
                    <Info info={teaser.user}/>
                    <IconDot/>
                    
                    <Info info={teaser.views+" Views"}/>
                    <IconDot/>
                    
                    <Info info={teaser.release_time}/>
                    
                </View>    
            </View>
            
            <View style={styles.footerRight}>
                <TouchableOpacity>            
                    <PlayIcon width={28} icon={20}/>
                </TouchableOpacity>          	
            </View> 
            </View>  
        			
        </View>
        
    )
};


const styles = StyleSheet.create({
    listitem:{
       backgroundColor:'black' 
    }, 
    header:{
        padding:12,
        backgroundColor:'black'         
    },
    headerText:{
        fontSize:metrics.small,
        color:colors.info
    },
    image:{
      width:metrics.screenWidth,
      aspectRatio:2.4,
      resizeMode:'cover',
    },
    footer:{
        flexDirection:'row',
        padding:12,
        backgroundColor:'white' 
    },
    footerRight:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    footerLeft:{
        flex:9
    }
})
