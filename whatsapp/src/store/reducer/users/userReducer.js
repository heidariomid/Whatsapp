import {actions} from '../../actions';

// users: {items: [], messages: '', hasError: false, errorMessages: ''}

const reducer = (userState, action) => {
	let result = userState;
	switch (action.type) {
		case actions.SEND_MESSAGE_SUCCESS:
			result = {...userState, messages: action.payload.messages};
			break;
		case actions.SEND_MESSAGE_FAILED:
			result = {...userState, hasError: true, errorMessages: action.payload.messages};
			break;
		default:
			result = userState;
			break;
	}
	return result;
};

export default reducer;
