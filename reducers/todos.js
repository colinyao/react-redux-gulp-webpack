const initialState = {
    newAppleId: 1,
    apples: [{
        id: 0,
        weight: 200,
        isEaten: false
    }]
}
export default function todos(state = initialState, action) {
    let newState;

    switch (action.type) {
        case 'EAT_APPLE':
            state.apples[action.playload].isEaten = true;
            newState = Object.assign({}, state);
            return newState;
        case 'ADD_APPLE':
            newState=Object.assign (
                ...state,
                {
                    apples: [
                    ...state.apples,
                    {
                        id: state.newAppleId,
                        weight: action.playload,
                        isEaten: false
                    }],
                    newAppleId: state.newAppleId + 1
                }
            )
            return newState;
        default:
            return state;    
    }

}
