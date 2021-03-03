import axios from "axios";

export const FETCHING_RECIPE_START = "FETCHING_RECIPE_START";
export const FETCHING_RECIPE_SUCCESS = "FETCHING_RECIPE_SUCCESS";
export const FETCHING_RECIPE_ERROR = "FETCHING_RECIPE_ERROR";

const headers = {
	Accept: "application/json"
};

export const fetchRecipe = () => (dispatch) =>  {
	dispatch({type: FETCHING_RECIPE_START});

	axios.get("https://api.punkapi.com/v2/beers/random", { headers: headers })
		.then(res => {
			console.log(res);
			dispatch({type: FETCHING_RECIPE_SUCCESS, payload: res.data[0]});
		})
		.catch(err => {
			console.log(err);
			dispatch({type: FETCHING_RECIPE_ERROR, payload: err.response.message});
		});
};