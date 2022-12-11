import { CreateCard, randomCard, updateCard } from "@interfaces/card.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CardService from "@services/cards.services";

export const createCard = createAsyncThunk(
	"card/createcard",
	async (card: CreateCard, thunkAPI) => {
		console.log(card);
		const res = await CardService.createCard(card);
		console.log(res);
		switch (res.status) {
			case 201:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);

export const getCardByID = createAsyncThunk(
	"card/getcardbyid",
	async (cardID: string, thunkAPI) => {
		const res = await CardService.getCardByID(cardID);
		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);

export const UpdateCard = createAsyncThunk(
	"card/updatecard",
	async (card: updateCard, thunkAPI) => {
		const res = await CardService.updateCard(card);
		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);

export const deleteCard = createAsyncThunk(
	"card/deletecard",
	async (cardID: string, thunkAPI) => {
		const res = await CardService.deleteCard(cardID);
		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);

export const getRandomCards = createAsyncThunk(
	"card/getrandomcards",
	async (data: randomCard, thunkAPI) => {
		const res = await CardService.randomCard(data.deckID, data.limit);
		switch (res.status) {
			case 200:
				return res.data;
			default:
				return thunkAPI.rejectWithValue({ error: res.data });
		}
	},
);
