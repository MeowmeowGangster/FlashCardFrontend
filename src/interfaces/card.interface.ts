import { filesUpload } from "./file.interface";

export interface CardDataResponse {
	cardData: CardData[];
	message: string;
}
export interface CardData {
	ownerID: string;
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
	cardPic: string;
	deckID: string;
	cardMemo: string;
	file: File | Blob | undefined ;
}
