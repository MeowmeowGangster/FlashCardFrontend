import { Icard } from "@interfaces/state.interface";
import { createCard } from "@redux/actions/card";
import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
	// deckById: Ideck | null;
	cards: Icard[];
	isLoading: boolean;
	error: string | null;
}

const initialState: CardsState = {
	cards: [],
	// deckById: null,
	isLoading: false,
	error: "",
};

const cards = createSlice({
	name: "cards",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Get all decks
		// builder.addCase(getDecks.pending, (state) => {
		// 	state.isLoading = true;
		// });
		// builder.addCase(getDecks.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.decks = action.payload;
		// });
		// builder.addCase(getDecks.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.error.message as string;
		// });
		// 	// get deck by id
		// 	builder.addCase(getDeckById.pending, (state) => {
		// 		state.isLoading = true;
		// 	});
		// 	builder.addCase(getDeckById.fulfilled, (state, action) => {
		// 		console.log(action.payload);
		// 		state.isLoading = false;
		// 		state.deckById = action.payload;
		// 	});
		// 	builder.addCase(getDeckById.rejected, (state, action) => {
		// 		state.isLoading = false;
		// 		state.error = action.error.message as string;
		// 	});
		// 	// delete deck
		// 	builder.addCase(deleteDeck.pending, (state) => {
		// 		state.isLoading = true;
		// 	});
		// 	builder.addCase(deleteDeck.fulfilled, (state) => {
		// 		state.isLoading = false;
		// 	});
		// 	builder.addCase(deleteDeck.rejected, (state, action) => {
		// 		state.isLoading = false;
		// 		state.error = action.error.message as string;
		// 	});
	},
});

export default cards.reducer;
