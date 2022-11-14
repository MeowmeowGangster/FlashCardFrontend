export interface IRootState {
	auth: IAuthState;
	user: IUserState;
	deck: IDecksState;
}
export interface Ideck {
	deckId: string;
	deckName: string;
	cards: Icard[];
}

export interface Icard {
	cardId: string;
	cardName: string;
	cardPic: string;
	cardMemo: string;
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