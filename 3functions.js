//----functions: Reusable block of code for specific task.
//----it takes input, performs actions, return output

//named function/normal functions
//function declaration
function funName(name1){
    console.log(`hi! ${name1}`);
}
//function calling
let result = funName("Vamsi");
console.log(result);

//types of functions
//return type,no return type
//-------------------------------------
//anonymous function - does not have a name, usually assigned to variable or used as callback fun
const greet = function(){
    console.log(`hi all , good morning`);
}
greet();
//---------------------------------------
//immediately invoked function - executed immediately after their definition
(
    function(name2, age){
        console.log(`hi ${name2} your age is ${age}`)
    }
)("vamsi",25);
//----------------------------------------
//arrow function - using => syntax shorter
const square = ((n)=>n*n);
console.log(square(5));
//-----------------------------------------
//callback functions - function passed as an argument to another function
function greet1(uName,callbackFun1){
    console.log(`hi ${uName}`);
    callbackFun1();    
}
function standardGreeting(){
    console.log(`How are you?`);
}
greet1("Vamsi",standardGreeting);
//-------------------------------------
