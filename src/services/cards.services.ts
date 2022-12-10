import { createCard } from "@interfaces/card.interface";
import { filesUpload } from "@interfaces/file.interface";
import { getWithExpiry } from "@utils/localstorage";

import { AxiosResponse, default as axios } from "axios";



const getCardByID = async (cardID: string) => {
	const response = await axios.get(`/cards/${cardID}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${getWithExpiry("token")}`,

		},
	});
	return response;
}
const createCard = async (cardData: createCard) => {
	const file = cardData.file;
	const fromData = new FormData();
	let headers = {
		"Content-Type": "multipart/form-data",
		Authorization: `Bearer ${getWithExpiry("token")}`,
	};
	if (file) {
		fromData.append("file", file);
	}
	console.log(cardData.deckID);

	fromData.append("cardName", cardData.cardName);
	fromData.append("cardMemo", cardData.cardMemo);
	fromData.append("deckID", cardData.deckID);

	const response = await axios.post(`/cards`, cardData, {
		method: "POST",
		headers: headers,
	});
	return response;
};



const CardService = {
	createCard,
	getCardByID,
};
export default CardService;
