export function eatApple(id){
	console.log(id)
	return{
		type:"EAT_APPLE",
		playload:id
	}
}
export function addApple(weight){
	return{
		type:"ADD_APPLE",
		playload:weight
	}
}
