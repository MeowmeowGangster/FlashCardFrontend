import { Icard } from "@interfaces/state.interface";
import { getCardByID } from "@redux/actions/card";
import { createSlice } from "@reduxjs/toolkit";

export interface CardsState {
	isLoading: boolean;
	error: string | null;
	cardById: Icard | null;
}

const initialState: CardsState = {
	cardById: null,
	isLoading: false,
	error: "",
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
	},
});

export default cards.reducer;
