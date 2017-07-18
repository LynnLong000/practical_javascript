/* the teacher is using plunker but i'd rather stay in my C9
hopefully that is not a issue 
*/
// version 10 place a delete button near each task created 
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
        this.todos.forEach(function(todo){
            if(todo.completed===true){
                completedTodos++;
            }
        });
   
        this.todos.forEach(function(todo){
            // case 1 : if everything's true , make false.
            if(completedTodos === totalTodos){
                todo.completed = false;
            }else{
                // case 2 : make everything false 
                todo.completed = true;
            }
        });
        
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
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value="";
        view.displayTodos();
    },
    deleteTodo:function(position){
        todoList.deleteTodo(position);
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
        
        todoList.todos.forEach(function(todo,position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion ="";
            if(todo.completed === true){
                todoTextWithCompletion = '(x)' + todo.todoText;
            } else {
                todoTextWithCompletion= '( )' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            //when in a callback function we can not use this to call the object
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
            // need the this here to in the call back to get to the object
        }, this);
        
    },
    createDeleteButton:function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners:function(){
        var todosUl = document.querySelector('ul');
        
        todosUl.addEventListener('click',function(event){
            
            //get the element that was clicked on 
            var elementClicked = event.target;
    
            // check if teh element is click is the delete button
           if(elementClicked.className === 'deleteButton'){
               
                // run handlers.deleteTodo(position).
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
           }
        });
    }
};

view.setUpEventListeners();