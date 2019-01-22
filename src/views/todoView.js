export class ToDoView {
    getView(todo){
        let container = document.createElement('div');
        container.innerText = todo.name;
        console.log(todo.name);
        document.body.append(container);
    }
}