import { CreateDeck, UpdateDeck } from "@interfaces/decks.interface";
import { getWithExpiry } from "@utils/localstorage";

import { AxiosResponse, default as axios } from "axios";

const getAllDecks = async (): Promise<AxiosResponse> => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};
	const response = await axios("/decks", {
		method: "GET",
		headers: headers,
	});
	return response;
};

const getDeckById = async (id: string) => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.get(`/decks/${id}`, {
		method: "GET",
		headers: headers,
	});
	return response.data;
};

const createDeck = async (deck: CreateDeck) => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.patch(`/decks/`, deck, {
		method: "POST",
		headers: headers,
	});
	return response.data;
};

const updateDeck = async (id: string, deck: UpdateDeck) => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.patch(`/decks/${id}`, deck, {
		method: "PATCH",
		headers: headers,
	});
	return response.data;
};

const deckService = { getAllDecks, getDeckById, createDeck, updateDeck };
export default deckService;
