import { combineReducers } from "redux";
import { auth, deck } from "./slice";

export default combineReducers({
	auth: auth,
	deck: deck,
});
