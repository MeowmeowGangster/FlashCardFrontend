import { CreateDeck } from "@interfaces/decks.interface";
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

export const getDeckById = createAsyncThunk(
	"decks/getDeckById",
	async (id: string, thunkAPI) => {
		const res = await DecksService.getDeckById(id);
		console.log(res);

		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);

export const createDeck = createAsyncThunk(
	"decks/createDeck",
	async (deck: CreateDeck, thunkAPI) => {
		const res = await DecksService.createDeck(deck);
		// console.log(res);

		switch (res.status) {
			case 201:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);
