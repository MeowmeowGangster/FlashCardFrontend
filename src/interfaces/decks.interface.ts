

export interface DeckDataResponse {
	ingredientData: DeckData[];
	message: string;
}
export interface DeckData {
	ownerID: string;
	deckID: string;
	deckName: string;
}

export interface CreateDeck extends DeckData {
	ownerID: string;
	deckName: string;
}

export interface UpdateDeck extends DeckData {
	deckName: string;
	cards: string[];
}
