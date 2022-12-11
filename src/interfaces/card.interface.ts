import { filesUpload } from "./file.interface";
import { Icard } from "./state.interface";
export interface CardDataResponse {
	cardData: CardData[];
	message: string;
}
export interface CardData {
	cardID: string;
	cardPic: string;
	cardName: string;
	cardMemo: string;
	deckID: string;
}

export interface CreateCard {
	cardName: string;
	deckID: string;
	cardMemo: string;
	file: File | Blob | undefined;
}

export interface updateCard {
	cardName: string;
	cardID: string;
	cardPic: string | undefined;
	deckID: string;
	cardMemo: string;
	file: File | Blob | undefined;
}

export interface randomCard {
	deckID: string;
	limit: number;
}

export interface randomCardResponse {
	cardData: Icard[];
}