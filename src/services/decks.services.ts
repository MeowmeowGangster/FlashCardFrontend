import { CreateDeck, UpdateDeck } from "@interfaces/decks.interface";
import { default as axios, default as request } from "axios";

const getAllDecks = async () => {
	try {
		const response = await axios.get("/decks");
		return response.data;
	} catch (error) {
		if (request.isAxiosError(error) && error.response) {
			console.log(error.response?.data as Response);
		}
		return null;
	}
};

const getDeckById = async (id: string) => {
	try {
		const response = await axios.get(`/decks/${id}`);
		return response.data;
	} catch (error) {
		if (request.isAxiosError(error) && error.response) {
			console.log(error.response?.data as Response);
		}
		return null;
	}
};

const createDeck = async (deck: CreateDeck) => {
	try {
		const response = await axios.post("/decks", deck);
		return response.data;
	} catch (error) {
		if (request.isAxiosError(error) && error.response) {
			console.log(error.response?.data as Response);
		}
		return null;
	}
};

const updateDeck = async (id: string, deck: UpdateDeck) => {
	try {
		const response = await axios.patch(`/decks/${id}`, deck);
		return response.data;
	} catch (error) {
		if (request.isAxiosError(error) && error.response) {
			console.log(error.response?.data as Response);
		}
		return null;
	}
};

export { getAllDecks, getDeckById, createDeck, updateDeck };
