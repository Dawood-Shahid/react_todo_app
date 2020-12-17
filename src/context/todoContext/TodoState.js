import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';
import Firebase from '../../dbConfig/Firebase';
import {
    GET_DATA,
    ADD_TODO,
    TASK_REMOVE,
    TASK_LIST_REMOVE
} from '../type';

const TodoState = (props) => {

    const initialState = {
        todos: {},
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const getData = async () => {
        let todo;
        let todos;
        await Firebase.database().ref('todo-app/todos').once('value')
            .then(data => {
                return (
                    todo = data.val()
                );
            })
            .catch(err => {
                console.log(err);
            });

        todos = { ...state.todos, ...todo };
        dispatch({ type: GET_DATA, payload: todos });
    };

    const addTodo = (text) => {
        let key = Firebase.database().ref('todo-app/').push().key;
        // console.log(key);

        const todo = {
            text: text,
            isComplete: false,
            key: key,
        };

        let todos = { ...state.todos };
        todos = { ...todos, [key]: todo };

        Firebase.database().ref('todo-app/todos/').set(todos)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                console.log(err)
            });

        dispatch({ type: ADD_TODO, payload: todos });
    };

    const taskAction = (data) => {
        Firebase.database().ref(`todo-app/todos/${data.key}`).set(data)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const removeTask = (key) => {
        const todos = { ...state.todos }
        delete todos[key]

        Firebase.database().ref(`todo-app/todos`).set(todos)
            .then(res => {
            })
            .catch(err => {
                console.log(err);
            });

        dispatch({ type: TASK_REMOVE, payload: todos })
    }

    const removeTaskList = () => {
        const todos = {};

        Firebase.database().ref(`todo-app/todos`).remove()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            });

        dispatch({ type: TASK_LIST_REMOVE, payload: todos})
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                getData,
                addTodo,
                taskAction,
                removeTask,
                removeTaskList
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;
