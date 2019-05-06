import model from "./Models";
import Api from "../Services/Api";
import { createStore } from "easy-peasy";

let store = null;
let apiClient = null;

const storeCreater = () => {
	console.log('LOG_createstore');
	
	apiClient = Api.createApiClient();
	store = createStore(model);
	return store;
};

// 👇 Kickoff our StoreCreater and store instance
export default storeCreater
export { store as StoreService, apiClient as ApiService };
