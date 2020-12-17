import {
    ADD_TODO
} from '../type'

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return {
                state
            }
    }
}