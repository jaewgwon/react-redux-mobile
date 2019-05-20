import types from './types';

export function insertTodo(str) {
    return {
        type: types.INSERT_TODO,
        payload: str
    };
}

export function deleteTodo(str) {
    return {
        type: types.DELETE_TODO,
        payload: str
    };
}

export function clearTodo() {
    return {
        type: types.CLEAR_TODO
    }
}