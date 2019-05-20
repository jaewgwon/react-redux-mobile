import types from './types';

export function insertTodo(str) {
    return {
        type: types.INSERT_TODO,
        payload: {
            key: str,
            status: false
        }
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

export function pressTodo(str) {
    return {
        type: types.PRESS_TODO,
        payload: str
    }
}