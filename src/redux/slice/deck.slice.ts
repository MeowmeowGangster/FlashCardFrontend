import { getDecks } from "@redux/actions/deck";
import { createSlice } from "@reduxjs/toolkit";

export interface DecksState {
	decks: any;
	isLoading: boolean;
	error: string | null;
}

const initialState: DecksState = {
	decks: [],
	isLoading: false,
	error: "",
};

const decks = createSlice({
	name: "decks",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		
		builder.addCase(getDecks.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getDecks.fulfilled, (state, action) => {
			
			state.isLoading = false;
			state.decks = action.payload;
		});
		builder.addCase(getDecks.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message as string;
		});
	},
});

export default decks.reducer;
