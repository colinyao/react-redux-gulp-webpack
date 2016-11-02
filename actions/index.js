export function eatApple(id){
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
