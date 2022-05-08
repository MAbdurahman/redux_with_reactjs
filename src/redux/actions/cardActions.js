import axios from 'axios';
import { DELETE_CARD, FETCH_USERS } from './../constants/rootConstants';



export const deleteCard = id => {
	return {
		type: DELETE_CARD,
		id,
	};
};

export const fetchUsers = () => {
   return dispatch => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => {
				dispatch({ type: FETCH_USERS, payload: data });
			});
	};
}