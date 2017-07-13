/* we talking about objects

operatingSystem mac
screenSize 15 inches 
purchaseYear  2011

each of these are properties

*/

// enlish objkec to JS object
var myComputer ={
    operatingSystem: "mac",
    screenSize: "15 inches", 
    purchaseYear:  2011 
};

// to reach the properties with teh dot notation (myComputer.__(within the object)____)


// object and function you can place objects in function
//lynn variable is a object with two properties. one is a string the other is a function
//the function is printing out the name of the object. it is referring to the object using this
//this when in side of object will refer to itself 
//method = pattern with putting a function to a property 

var lynn = {
    name: "Lynn",
    sayName:function(){
        console.log(this.name);
    }
}

