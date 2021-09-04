import React from 'react';
import * as api from '../api'
import {fetchPosts} from "../api";

// action creators
// pt thunk async (dispatch)
export const getPosts = () => async (dispatch) => {
	try {
		// in data gasesc raspunsul
 		const {data} = await fetchPosts();
 		dispatch({type:'FETCH ALL', payload: data})
	} catch (err){
		console.log(err)
	}




	// payload trebuie sa aiba o data unde tinem data
	// const actions ={type: 'FETCH ALL', payload: [] }

	// dispatch(actions) ;
}