export interface cardsState {
	decks: CardData[];
}

export interface DeckDataResponse {
	deckData: CardData[];
	message: string;
}
export interface CardData {
	ownerID: string;
	deckID: string;
	deckName: string;
}

export interface CreateDeck {
	deckName: string;
}

export interface UpdateDeck extends CardData {
	deckName: string;
	cards: string[];
}
