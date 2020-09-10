import userReducer from './users/userReducer';

export const initialState = {
	users: {rooms: [], items: {}, messages: '', isLogin: false, hasError: false, errorMessages: '', status: false},
};

export const reducer = (state = initialState, action) => {
	return {
		users: userReducer(state.users, action),
	};
};
