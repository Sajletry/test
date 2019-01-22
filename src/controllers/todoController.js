import {TodoModel} from "../models/todoModel";
import {ToDoView} from "../views/todoView";

export class ToDoController {
    constructor() {
        this.model = new TodoModel();
        this.view = new ToDoView();
        this.todos = this.model.getTodoList();
        this.renderChilds();
    }


    renderChilds(){
        console.log(this.todos);
       this.todos.forEach(todo=>{
           this.view.getView(todo);
       })
    }
}