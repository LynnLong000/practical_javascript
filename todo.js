/* the teacher is using plunker but i'd rather stay in my C9
hopefully that is not a issue 
*/
// version 8
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
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        // Get number of completed todos
        for(var i=0;i< totalTodos;i++){
            if(this.todos[i] === true){
                completedTodos++;
            }
        }
        // if everything's true, make everything false 
        if (completedTodos === totalTodos){
            for( i = 0; i<totalTodos;i++){
                this.todos[i].completed = false;
            }
        } else{ // Otherwise, make everything true
                for (var k = 0 ; k < totalTodos;k++){
                    this.todos[k].completed === false; 
                }
        }
        this.displayTodos();
    }
};

var handlers ={
    displayTodos:function(){
        todoList.displayTodos();
    },
    addTodo:function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo:function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodoPositionInput.value ='';
        changeTodoTextInput.value = '';
    },
    deleteTodos:function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value ='';
    },
    toggleCompleted:function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value='';
    },
    toggleAll:function(){
        todoList.toggleAll();
    }
};

// the difference is the top code and short and neat; bottom code is more drawn out


/*   refactoring this code above
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();  
});

toggleAllButton.addEventListener('click',function(){
    todoList.toggleAll();
});
*/