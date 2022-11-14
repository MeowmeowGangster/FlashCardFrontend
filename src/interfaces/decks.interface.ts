
export interface decksState {
	decks: DeckData[];
}

export interface DeckDataResponse {
	deckData: DeckData[];
	message: string;
}
export interface DeckData {
	ownerID: string;
	deckID: string;
	deckName: string;
}

export interface CreateDeck {
	deckName: string;
}

export interface UpdateDeck extends DeckData {
	deckName: string;
	cards: string[];
}
