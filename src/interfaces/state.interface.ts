export interface IRootState {
	auth: IAuthState;
	deck: IDecksState;
	card: ICardsState;
}
export interface Ideck {
	deckId: string;
	deckName: string;
	cards: Icard[];
}

export interface Icard {
	cardID: string;
	cardName: string;
	deckID: string;
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

interface ICardsState {
	isLoading: boolean;
	error: string | null;
	cardById: Icard | null;
	randomCards: Icard[] | [];
}
