/* the teacher is using plunker but i'd rather stay in my C9
hopefully that is not a issue 
*/
// version 9 deleted todolist.displaytodos
var todoList = {
    todos:[],
    addTodo:function(todoText){
        this.todos.push({
            todoText:todoText,    //todoText(this is the key):todoText(this is the variable for the value)
            completed:false
        });
    },
    changeTodo:function(position,todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodo:function (position){
        this.todos.splice(position,1);
    },
    toggleCompleted:function(position){
        var todo = this.todos[position];  // made a variable for less typing
        todo.completed = !todo.completed; // ! is the inverse of the set boolean value, called the bang operator
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        // Get number of completed todos
        for(var i=0;i< totalTodos;i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // if everything's true, make everything false 
        if (completedTodos === totalTodos){
            for( i = 0; i<totalTodos;i++){
                this.todos[i].completed = false;
            }
        } else{ // Otherwise, make everything true
                for (var i = 0 ; i < totalTodos;i++){
                    this.todos[i].completed = true; 
                }
        }
    }
};
/* added view.displayTodos()*/
var handlers ={
    addTodo:function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo:function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodoPositionInput.value ='';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo:function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value ='';
        view.displayTodos();
    },
    toggleCompleted:function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value='';
        view.displayTodos();
    },
    toggleAll:function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

// display whats going on 

var view = {
    displayTodos:function(){
         var todosUl = document.querySelector('ul');
         todosUl.innerHTML = '';
        for(var i=0;i<todoList.todos.length;i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            // '(x)' todoText;
            // var todoTextWithCompleted = '' ;
            //if (todo.completed === true)
                //(x)todoText 
            // else
             //( )todoText
            var todoTextWithCompletion ="";
            if(todo.completed === true){
                todoTextWithCompletion = '(x)' + todo.todoText;
            } else {
                todoTextWithCompletion= '( )' + todo.todoText;
            }
            
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};