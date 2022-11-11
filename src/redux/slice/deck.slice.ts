import { Ideck } from "@interfaces/state.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Ideck[] = [];

const deckSlice = createSlice({
	name: "deck",
	initialState,
	reducers: {
		setDecks: (state, action: PayloadAction<Ideck[]>) => {
			state = action.payload;
			return state;
		},

		clearDecks(state) {
			state = [];
			return state;
		},
	},
});

export const { setDecks, clearDecks } = deckSlice.actions;
export default deckSlice.reducer;
