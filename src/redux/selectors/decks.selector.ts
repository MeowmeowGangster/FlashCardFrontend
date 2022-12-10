

import { IRootState } from "@interfaces/state.interface";
import { DecksState } from "@redux/slice/deck.slice";
import { createSelector } from "reselect";

export const decksSelector: (state: IRootState) => DecksState = (
	state: IRootState,
) => state.deck;

export const decksData = createSelector(decksSelector, (deck) => {
	return deck.decks;
});

export const error = createSelector(decksSelector, (deck) => {
	return deck.error;
});

export const isLoading = createSelector(decksSelector, (deck) => {
	return deck.isLoading;
});

export const deckById = createSelector(decksSelector, (deck) => {
	return deck.deckById;
});