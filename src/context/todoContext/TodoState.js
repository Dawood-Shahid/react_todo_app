import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';
import Firebase from '../../dbConfig/Firebase';
import {
    GET_DATA,
    ADD_TODO,
    TASK_REMOVE,
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
        // console.log(data)
        Firebase.database().ref(`todo-app/todos/${data.key}`).set(data)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const removeTask = (key) => {
        // console.log(key)
        const todos = { ...state.todos }
        delete todos[key]

        Firebase.database().ref(`todo-app/todos`).set(todos)
            .then(res => {
                // console.log(res)
            })
            .catch(err => {
                console.log(err);
            });

        dispatch({ type: TASK_REMOVE, payload: todos })
        // console.log(todos)
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                getData,
                addTodo,
                taskAction,
                removeTask,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;
