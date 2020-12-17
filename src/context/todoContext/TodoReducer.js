import {
    GET_DATA,
    ADD_TODO,
    TASK_REMOVE,
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
        case TASK_REMOVE:
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