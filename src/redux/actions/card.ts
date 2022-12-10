import { createCard } from "@interfaces/card.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CardService from "@services/cards.services";

export const CreateCard = createAsyncThunk(
	"card/createcard",
	async (card: createCard, thunkAPI) => {
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

export const GetCardByID = createAsyncThunk(
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

