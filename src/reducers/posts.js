export default (posts = [], action)=>{
	switch (action.type){
		case 'FETCH ALL':
				return action.payload;
		case 'CREATE':
			return action.payload;
		default:
			return posts;
	}
}


// state trebuie sa aiba o valoare initiala =[]
// const reducer = (state = [], action)=>{
// todo const reducer
// export default (posts = [], action)=>{
// 	if (action.type ==="CREATE"){
// 		// return posts;
// 		return action.payload;
// 	}
// 	if (action.type ==="FETCH ALL"){
// 		return posts;
// 	}
// }

