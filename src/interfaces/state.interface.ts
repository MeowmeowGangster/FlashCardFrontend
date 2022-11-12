export interface IRootState {
	auth: IAuthState;
	user: IUserState;
	deck: IDecksState;
}
export interface Ideck {
	deck_id: string;
	deck_name: string;
	cards: string[];
}

export interface Icard{
	card_id: string;
	card_name: string;
	
}
interface IAuthState {
	isLoggedIn: boolean;
	token: string;
	provider: string;
}
interface IDecksState {
	isLoading: boolean;
	decks: Ideck[];
	error: string | null;
	deckById: Ideck | null;
}
export interface IUserState {
	loading: "idle" | "pending" | "succeeded" | "failed";
}