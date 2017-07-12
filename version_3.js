/* the teacher is using plunker but i'd rather stay in my C9
hopefully that is not a issue 
*/
// files says version 3 but i'm im branch four
var todoList = {
    todos:[],
    displayTodos:function(){
        console.log('My Todos:',this.todos());
    },
    addTodo:function(todoText){
        this.todos.push({
            todoText:todoText,    //todoText(this is the key):todoText(this is the variable for the value)
            completed:false
        });
        this.displayTodos();
    },
    changeTodo:function(position,todoText){
        this.todos[position].todoText = 'todoText';
        this.displayTodos();
    },
    deleteTodos:function (position){
        this.todos.splice(position,1);
        this.displayTodos();
    } 
};
