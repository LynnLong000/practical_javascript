/* the teacher is using plunker but i'd rather stay in my C9
hopefully that is not a issue 
*/
// files says version 3 but i'm im branch four
var todoList = {
    todos:[],
    displayTodos:function(){
        if(this.todos.length === 0){
            console.log("your todo list is empty");
        } else {
            console.log('My Todos:');
            for(var i =0;i<this.todos.length;i++){
                console.log(this.todos[i].todoText);
                if(this.todos[i].completed === true){
                    console.log('(x)',this.todos[i].todoText);
                } else {
                    console.log('( )',this.todos[i].todoText);
                }
            }
        }             
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
    },
    toggleCompleted:function(position){
        var todo = this.todos[position];  // made a variable for less typing
        todo.completed = !todo.completed; // ! is the inverse of the set boolean value, called the bang operator
        this.displayTodos();
    }
};
