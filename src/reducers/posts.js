
// state trebuie sa aiba o valoare initiala =[]
// const reducer = (state = [], action)=>{
const reducer = (posts = [], action)=>{
	if (action.type ==="CREATE"){
		return posts
	}
}