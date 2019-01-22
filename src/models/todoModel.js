export class TodoModel {
    getTodoList() {
        return parseTodos(getFromStore());
    }

    setTodoList(todoList) {
        setToStore(stringifyTodos(todoList));
    }

}

function getFromStore() {
    return localStorage.getItem('todos');
}

function setToStore(todos) {
    localStorage.setItem('todos', todos);
}

function stringifyTodos(todoList) {
    return JSON.stringify(todoList);
}

function parseTodos(todoList) {
    return JSON.parse(todoList);
}
