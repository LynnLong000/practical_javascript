/*   english for functions
makeSandwichWith _________
    get one slice of bread.
    Add _______.
    Put a slice of bread.
  */  
    
function makeSandwichWith(filling) {
    get one slice of bread;
    Add filling;
    Put a slice of bread;
    }
    
    //function makeSandwichWith('called parameters'){   'called '   } 
    makeSandwichWith ___ham___
    makeSandwichWith('ham')  // like telling your employee to make a Sandwich
    //makeSandwichWith('called arguments')
    
// the function is called what every is called is what will be placed in person HiTO('peter') will says hi peter    
function sayHiTO(person){ 
    console.log('hi ',person) 
}  

// function to display todos
var todos = ['item 1','item 2','item 3'] ;

function displayTodos(){
    console.log('My todos:',todos);
}


// adding a todo and it display it


function addTodo(todo){
    todos.push(todo);
    displayTodos();
}

//  changing todo  
// function has two parameters which is the parameters

function changeTodo(position,newValue){
    todos[position]= newValue;
    displayTodos();
}

// delete todo

function deleteTodo(position){
    todos.splice(position,1)
}






