import React from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../actions/actions";

const Recipe = (props) => {

	const getRecipe = () => {
		props.fetchRecipe();
	}

	return (
		<>
			<h1>Lets start</h1>
			<h2>Name : {props.name}</h2>
			<p>Description: {props.description}</p>
			<button onClick={getRecipe}>Get some booze</button>
		</>
	)
};

const mapStateToProps = (state) => {
	return {
		name: state.name,
		description: state.description,
		error: state.error,
		isFetching: state.isFetching
	}
};

const mapDispatchToProps = {fetchRecipe};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);