import React from 'react'
import {Linking, Text} from 'react-native'

export default () => {

    const openLink = () => {
        Linking.openURL("https://github.com/HarishJangra/demo_rm.git")
    }

    return(
        <Text onPress={openLink} style={{
            color:'#dadada',
            fontSize:12,
            fontWeight:"600"
        }}> Made with ♡ by  Harish Jangra  </Text>

    )
}