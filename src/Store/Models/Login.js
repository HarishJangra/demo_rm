import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { setLoginCredentials } from "../../Services/Keychain";
import { STATUS } from "../../Constants";
import { APP_STATE } from '../../Constants/index';
import { showSuccessToast } from "../../Utils/Toast";
import NavigationService from '../../Navigation/index';
import Routes from "../../Navigation/Routes";

const updateName = thunk(async (actions, {key, value}, {getState})=> {
	if(!key){
		return
	}

	let state = getState();
	let update = Object.assign({}, state, {
		[key]:value		
	})
	
	actions.updateStatus(STATUS.FETCHING)

	let response = await setLoginCredentials(
		update.first,
		update.last
	)
	
	setTimeout(() => {
		actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED)
		if (!response.status) {			
			console.warn(response.error);
		}else {
			showSuccessToast("Name Updated !")
			actions.updateLoginCredentials(update)
			NavigationService.navigate(Routes.SETTINGS_SCREEN)
		}
	}, 1000);

})

const loginUser = thunk(async (actions, payload) => {
	if(!payload.first || !payload.last ) {
		return;
	}

	actions.updateStatus(STATUS.FETCHING)	
	// let response = await ApiService.loginUser(payload);
	let response = await setLoginCredentials(
		payload.first,
		payload.last
	);

	// mocking our api
	setTimeout(() => {
		actions.updateStatus(response.status ? STATUS.SUCCESS : STATUS.FAILED)
		if (!response.status) {
			console.warn(response.error);
		}else {
			showSuccessToast("Login success !")

			actions.updateLoginCredentials(payload)
			actions.changeAppState(APP_STATE.PRIVATE)	
		}
	}, 1000);
});

const LoginModel = {
	loginUser,
	updateName,
	status:STATUS.NOT_STARTED,
	updateStatus:action((state,status) => {
		state.status = status
	}),
	appstate: APP_STATE.UNKNOWN,
	changeAppState:action((state, payload)=> {
		state.appstate = payload
	}),
	onLoginInputChange: action((state, { key, value }) => {
		state[key] = value;
	}), 
	updateLoginCredentials: action((state, {first,last}) => {		
		state.first=first,
		state.last= last
	}),
	
};

export default LoginModel;
