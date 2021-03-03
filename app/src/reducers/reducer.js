import { FETCHING_RECIPE_ERROR, FETCHING_RECIPE_START, FETCHING_RECIPE_SUCCESS } from "../actions/actions";

const initialState = {
	name: "",
	isFetching: false,
	error: "",
	description: ""
};

export const titleReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCHING_RECIPE_START:
			return {
				...state,
				isFetching: true,
				error: ""
			};

		case FETCHING_RECIPE_SUCCESS:
			return {
				...state,
				isFetching: false,
				name: action.payload.name,
				description: action.payload.description
			}

		case FETCHING_RECIPE_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}

	default:
		return state;
	}
}