import React, { useRef, useEffect, useState } from "react";
import { View, Text, Alert, Keyboard } from "react-native";
import { useStore, useActions } from "easy-peasy";
import { STATUS } from "../../Constants";
import LoadingActionContainer from "../../Components/LoadingActionContainer";

import useAuth from "../../Services/Auth";
import {Section, HeadingX,Checkbox, FloatingInput} from "../../Components";
import colors from "../../Themes/Colors";
import metrics from '../../Themes/Metrics';

export default () => {
	const onChange = useActions(actions => actions.login.onLoginInputChange);
	
	const [isAcceptedTerms , updateTerms] = useState(false)
	
	const { state, login } = useAuth();

	const inputFirst = useRef();
	const inputLast = useRef();

	const onSubmit = () => {
		inputLast.current.focus();
	};

	const { first, last, status } = useStore(state => ({
		first: state.login.first,
		last: state.login.last,
		status: state.login.status
	}));

	const loginUser = () => {		
		Keyboard.dismiss();		
		
		if(!first || !last){
			Alert.alert("Fields Empty","First and Last names are mandatory.")
		}else {
			login({ first, last });
		}
	};
	
	const loading = status == STATUS.FETCHING;
	
	
	return (
		<LoadingActionContainer 
			action={{
				label:'Continue',
				disabled: !isAcceptedTerms,
				onAction:loginUser,
				icon:'ios-arrow-forward',
				loading		
			}}
		>
			<Section style={{marginTop:20}}>
			 <HeadingX>
			 Hey! What should we call you?
			 </HeadingX>

			 <FloatingInput 
				 ref={inputFirst} 
				 style={{marginTop:metrics.s2}} 
				 title="First Name" 
				 onSubmitEditing={onSubmit}
				 value={first} 
				 returnKeyType={'next'}
				 onChangeText={(value)=>onChange({key:'first', value})}  
				 />

			 <FloatingInput 
				 ref={inputLast} 
				 style={{marginTop:metrics.s2}} 
				 title="Last Name" 
				 value={last} 
				 onSubmitEditing={()=> {
					isAcceptedTerms && loginUser()
				 }}
				 returnKeyType={'send'}
				 onChangeText={(value)=>onChange({key:'last', value})}  
				 />

			 <Checkbox checked={isAcceptedTerms} onChange={updateTerms}  label="By proceeding I agree with Terms & Conditions, Terms of use and Privacy-policy"/>

			</Section>

		</LoadingActionContainer>
	);
};
