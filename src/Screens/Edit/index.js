import React, {useState, useMemo} from 'react'
import { Container, FloatingInput, HeadingX } from '../../Components';
import NavigationStyles from '../../Styles/NavigationStyles';
import metrics from '../../Themes/Metrics';
import colors from '../../Themes/Colors';
import { useStore, useActions } from 'easy-peasy';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import { STATUS } from '../../Constants';
import { useEffect } from 'react';

import { Keyboard } from 'react-native';


const EditSetting = ({navigation}) => {   
     
    const key = navigation.getParam('key', 'first')  
    const storeValue= useStore(state => state.login[key]) 
    const status = useStore(state => state.login.status)
    const updateName = useActions(actions=> actions.login.updateName)
    
    const title = useMemo(() =>  key == 'first' ? 'First Name':'Last Name', [key])
    // keep change in local state
    const [value , setValue ] = useState(storeValue)
    const loading = status == STATUS.FETCHING 

    useEffect(()=> {
        if(status == STATUS.SUCCESS){
            
        }
    },[status])

    const _update = () => {
        Keyboard.dismiss()
        updateName({key,value})
    }

    return (
        <LoadingActionContainer
            fixed
            action={{
                label:'Save',
                onAction:_update,
				loading		
			}}
        >
            <Container style={{padding:metrics.s3}}>
            <HeadingX>Update your name</HeadingX>
                <FloatingInput autoFocus style={{marginTop:metrics.s2}} title={title} value={value} onChangeText={(value)=>setValue(value)}  />
            </Container>    

        </LoadingActionContainer>
        )
}

EditSetting.navigationOptions = ({navigation})=> {
	// console.log('LOG_navigagtion',navigation);
	return {
		headerStyle:[NavigationStyles.header],
        headerTitle: "",
        headerTintColor:['black'],
		headerTitleStyle: {
            fontSize:metrics.h6,
			width: metrics.screenWidth,
			fontWeight: "600"
		}	
	}
}

export default EditSetting