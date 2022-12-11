import { IRootState } from "@interfaces/state.interface";
import { CardsState } from "@redux/slice/card.slice";
import { createSelector } from "reselect";

export const cardsSelector: (state: IRootState) => CardsState = (
	state: IRootState,
) => state.card;

export const error = createSelector(cardsSelector, (card) => {
	return card.error;
});

export const isLoading = createSelector(cardsSelector, (card) => {
	return card.isLoading;
});

export const cardById = createSelector(cardsSelector, (card) => {
	return card.cardById;
});


export const randomCards = createSelector(cardsSelector, (card) => {
	return card.randomCards;
});