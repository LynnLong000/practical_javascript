function logTenNumber{
    
}


debugger;
logTenNumber();

// creating a function that does deugging 
function runWithDebugger(ourFunction;){
    debugger;
    ourFunction;
}


//timer or alarm   counts in ms   5sec = 5000ms
setTimeout(function(){
    console.log(' wake up lynn');
},5000);


var students = ['lynn','Peter','long'];
function logName (name){
    console.log(name);
}

students.forEach(logName)

// creating for each 

function forEach(myArray,myFunction){
    for(var i =0; i<myArray.length;i++){
        myFunction(myArray[i]);
    }
}

// function that take other functions

// used something about glitch 