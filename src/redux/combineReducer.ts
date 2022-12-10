import { combineReducers } from "redux";
import { auth, deck,card} from "./slice";

export default combineReducers({
	auth: auth,
	deck: deck,
	card: card
});
