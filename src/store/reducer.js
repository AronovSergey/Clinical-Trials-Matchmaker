const initialState = {
	name: null,
    age: null,
    gender: "Male",
    searchExpression: null,
    selectedNCTId:null
}

const reducer = (state = initialState, action) => {
	switch( action.type ) {
		case 'UPDATE_SEARCH_DATA':
			return {
				...state,
				name: action.props.name,
    			age: action.props.age,
    			gender: action.props.gender,
    			searchExpression: action.props.searchExpression
			};
		case 'UPDATE_SELECTED_NCTID':
			return {
				...state,
				selectedNCTId: action.NCTId
			};			
		default:
	};
	return state;
}

export default reducer;