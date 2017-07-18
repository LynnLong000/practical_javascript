    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        /*
        // Get number of completed todos
        for(var i=0;i< totalTodos;i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }*/
        
        this.todos.forEach(function(todo){
            if(this.todo.completed===true){
                completedTodos++;
            }
        })
        
        // if everything's true, make everything false 
        if (completedTodos === totalTodos){
        /*    for( i = 0; i<totalTodos;i++){
                this.todos[i].completed = false;
            }  */
            
            this.todos.forEach(function(todo) {
                todo.completed = false
            });
        } else{ // Otherwise, make everything true
            /*    for (var i = 0 ; i < totalTodos;i++){
                    this.todos[i].completed = true; 
                } */
                
                this.todos.forEach(function(todo){
                    todo.completed = true ;
                });
        }
    }