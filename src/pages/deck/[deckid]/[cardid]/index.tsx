import type { NextPage } from "next";
import { useRouter } from "next/router";

const Card: NextPage = () => {
	const router = useRouter();
	const { cardid } = router.query;
	return <div>Card ID: {cardid} </div>;
};

export default Card;
