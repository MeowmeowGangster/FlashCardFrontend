import { Icard } from "@interfaces/state.interface";
import { getCardByID, getRandomCards } from "@redux/actions/card";
import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
	isLoading: boolean;
	error: string | null;
	cardById: Icard | null;
	randomCards: Icard[];
}

const initialState: CardsState = {
	cardById: null,
	isLoading: false,
	error: "",
	randomCards: [],
};

const cards = createSlice({
	name: "cards",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// get card by id

		builder.addCase(getCardByID.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getCardByID.fulfilled, (state, action) => {
			console.log(action.payload);
			state.isLoading = false;
			state.cardById = action.payload;
		});
		builder.addCase(getCardByID.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message as string;
		});

		builder.addCase(getRandomCards.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getRandomCards.fulfilled, (state, action) => {
			state.isLoading = false;
			state.randomCards = action.payload;
		});
		builder.addCase(getRandomCards.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error.message as string;
		});
	},
});

export default cards.reducer;
