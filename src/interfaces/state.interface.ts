export interface IRootState {
	auth: IAuthState;
	user: IUserState;
	deck: IDeckState;
}
export interface Ideck {
	deck_id: string;
	deck_name: string;
}
interface IAuthState {
	isLoggedIn: boolean;
	token: string;
	provider: string;
}
interface IDeckState {
	isLoading: boolean;
	decks: [];
	error: string | null;
}
export interface IUserState {
	loading: "idle" | "pending" | "succeeded" | "failed";
}