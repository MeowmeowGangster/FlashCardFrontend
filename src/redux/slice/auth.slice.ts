import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getWithExpiry, setWithExpiry } from "@utils/localstorage";

interface Token {
	token?: string | null;
	provider?: string | null;
	userId?: string | null;
	role?: string | null;
	picture?: string | null;
	name?: string | null;
}

interface Auth extends Token {
	isLoggedIn: boolean;
}

const token: string = getWithExpiry("token") as string;
const provider: string = getWithExpiry("provider") as string;

const notAuthenticated: Auth = {
	isLoggedIn: false,
	token: null,
	provider: null,
	userId: null,
	role: null,
	picture: null,
	name: null,
};

const initialState: Auth =
	token && provider ? { isLoggedIn: true, token, provider } : notAuthenticated;

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		REGISTER_SUCCESS: (state) => {
			state.isLoggedIn = false;
		},
		REGISTER_FAIL: (state) => {
			state.isLoggedIn = false;
		},
		LOGIN_SUCCESS: (state, action: PayloadAction<Token>) => {
			console.log("LOGIN_SUCCESS");
			console.log(action.payload);
			state.isLoggedIn = true;
			state.token = action.payload.token;
			state.provider = action.payload.provider;
			state.userId = action.payload.userId;
			state.role = action.payload.role;
			state.picture = action.payload.picture;
			state.name = action.payload.name;

			setWithExpiry("token", action.payload.token as string, 60 * 60 * 7);
			setWithExpiry("provider", action.payload.provider as string, 60 * 60 * 7);
		},
		LOGIN_FAIL: (state) => {
			state.isLoggedIn = false;
			state.token = null;
			state.provider = null;
		},
		LOGOUT: (state) => {
			state.isLoggedIn = false;
			state.token = null;
		},
	},
});

export default authSlice.reducer;
