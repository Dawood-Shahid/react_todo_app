import {
    GET_DATA,
    ADD_TODO,
} from '../type'

export default (state, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                todos: action.payload
            }
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