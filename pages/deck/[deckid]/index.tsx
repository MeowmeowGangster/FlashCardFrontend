import type { NextPage } from "next";
import { useRouter } from "next/router";

const Deck: NextPage = () => {
	const router = useRouter();
	const { deckid } = router.query;
	return <div>Deck: {deckid} </div>;
};

export default Deck;
