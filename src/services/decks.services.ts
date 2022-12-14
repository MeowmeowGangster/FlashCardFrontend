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

const getDeckById = async (id: string): Promise<AxiosResponse>  => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.get(`/decks/${id}`, {
		method: "GET",
		headers: headers,
	});
	return response;
};

const createDeck = async (deckData: CreateDeck): Promise<AxiosResponse>  => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.post(`/decks`, deckData, {
		method: "POST",
		headers: headers,
	});
	return response;
};

const updateDeck = async (id: string, deck: UpdateDeck): Promise<AxiosResponse>  => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};

	const response = await axios.patch(`/decks/${id}`, deck, {
		method: "PATCH",
		headers: headers,
	});
	return response;
};
const deleteDeck = async (id: string): Promise<AxiosResponse>  => {
	let headers = {
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};
	const response = await axios(`/decks/${id}`, {
		method: "DELETE",
		headers: headers,
	});
	return response;
};

const deckService = {
	getAllDecks,
	getDeckById,
	createDeck,
	updateDeck,
	deleteDeck,
};
export default deckService;
