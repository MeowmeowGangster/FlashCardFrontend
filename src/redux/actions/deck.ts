import { createAsyncThunk } from "@reduxjs/toolkit";
import DecksService from "@services/decks.services";

export const getDecks = createAsyncThunk(
	"decks/getAllDecks",
	async (_, thunkAPI) => {
		const res = await DecksService.getAllDecks();
		// console.log(res);

		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);
