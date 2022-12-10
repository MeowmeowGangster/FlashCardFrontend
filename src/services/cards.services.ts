import { createCard } from "@interfaces/card.interface";
import { filesUpload } from "@interfaces/file.interface";
import { getWithExpiry } from "@utils/localstorage";

import { AxiosResponse, default as axios } from "axios";
import { ca } from "date-fns/locale";

// const getAllCards = async (): Promise<AxiosResponse> => {
// 	let headers = {
// 		Authorization: `Bearer ${getWithExpiry("token")}`,
// 	};

// 	const response = await axios("/cards", {
// 		method: "GET",
// 		headers: headers,
// 	});
// 	//https://api.flashback.standupcode.tech/api/v1/card
// 	return response;
// };

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
};
export default CardService;
