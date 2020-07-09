import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const initialState = {
	name: '',
    age: '',
    gender: "Male",
    searchExpression: '',
	selectedNCTId:'',
	trails: [],
	successRateArray: []
}

const reducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'UPDATE_SEARCH_DETAILS':
			return {
				...state,
				name: action.payload.props.name,
    			age: action.payload.props.age,
    			gender: action.payload.props.gender,
    			searchExpression: action.payload.props.searchExpression
			};
		case 'UPDATE_SELECTED_NCTID':
			return {
				...state,
				selectedNCTId: action.payload.NCTID
			};	
		case 'UPDATE_TRAILS_ARR':
			return {
				...state,
				trails: action.filteredData,
			}
		case 'UPDATE_SUCCESS_RATE_ITEM':
			return{
				...state,
				successRateArray: [...state.successRateArray, action.successRateItem]
			}
		default:
			return state;

	// eslint-disable-next-line no-unreachable
	};
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;