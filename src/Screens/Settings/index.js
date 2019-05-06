import React from 'react'
import { useStore } from 'easy-peasy';
import { Container } from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import metrics from '../../Themes/Metrics';
import colors from '../../Themes/Colors';
import SettingItem from '../../Components/SettingItem';
import Button from '../../Components/Button'
import useAuth from '../../Services/Auth/index';
import NavigationService from '../../Navigation';
import Routes from '../../Navigation/Routes';
import {Alert, View, Text} from 'react-native'
import viewStyles from '../../Styles/ViewStyles';
import Me from '../../Services/Me';


const SettingScreen = (props) => {
    const {logout} = useAuth()

	const { first, last } = useStore(state => ({
		first:state.login.first,
		last:state.login.last,
    }));
    
    const _logout = () => {
        Alert.alert("Confirm logout ","Please confirm logging out of the app",[
            {
                style:'cancel',
                text:'Cancel',                
            },
            {
                text:'OK',
                onPress:logout
            }
        ])
    }

    const onEdit = (key) => {
        NavigationService.navigate(Routes.EDIT_SETTING, {key})
    }

    return (
        <Container bg={colors.background} style={{paddingTop:metrics.s1}}>
            <Container>
               
                <SettingItem value={first} label={'First Name'}  onEdit={()=>onEdit("first")}/> 
                <SettingItem value={last} label={'Last Name'} onEdit={() => onEdit("last")} />

                <Button onPress={_logout} style={{marginTop:metrics.s3}} label="LOGOUT" bg="transparent" color="red" />
        
            </Container>
            
            <View style={[{padding:metrics.s3}, viewStyles.center]}>
                <Text>Demo App</Text>
                <Text>v1.02</Text>
                
                <Me />

            </View>
        </Container>
    )
}


SettingScreen.navigationOptions = ({navigation})=> {
	// console.log('LOG_navigagtion',navigation);
	return {
		headerStyle:[NavigationStyles.header],
        headerTitle: "Edit Personal Details",
        headerTintColor:['black'],
		headerTitleStyle: {
            fontSize:metrics.h6,
			width: metrics.screenWidth,
			fontWeight: "600"
		}	
	}
}

export default SettingScreen