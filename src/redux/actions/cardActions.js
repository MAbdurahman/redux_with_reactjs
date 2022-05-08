import { DELETE_CARD, FETCH_USER } from './../constants/rootConstants';



export const deleteCard = id => {
	return {
		type: DELETE_CARD,
		id,
	};
};