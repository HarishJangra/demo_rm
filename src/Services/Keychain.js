import React from "react";
import * as Keychain from "react-native-keychain";
import AsyncStorage from '@react-native-community/async-storage'

export const setLoginCredentials = async (field1, field2) => {
   try{
	   const response = await AsyncStorage.multiSet([['first', field1], ['last', field2]])
	   console.log("Async storage data securely set  ", response);
	   return { status: true, response };

   }catch(e){	
		console.log("Async storage access failed ", e);
		return { status: false, error: e }; 
   }
};

export const getLoginCredentials = async () => {
	try{
		const first = await AsyncStorage.getItem('first')
		const last = await AsyncStorage.getItem('last')
		if(first && last){
			return {
				first,
				last
			};
		} return false
	}catch(e){
		console.log("Cannot retrieve keychain data", e);
		return false;
	}

};

export const resetLoginCredentials = async () => {
		try{
			const reset = await AsyncStorage.multiRemove(['first','last'])
			return reset;
		}catch(e){
			console.log("cannot access or reset keychain data ", e);
			return false;
		}
};
