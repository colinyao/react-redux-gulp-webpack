import {
	combineReducers
} from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
	todos
})

export default rootReducer  //如果通过组合reducer todos，在mapStateToProps时就需要用state.todos 