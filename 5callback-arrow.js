//Here i am passing the named function
//                      anonmous function
//                      arrow function

//Named function
function myName(){
    console.log(`my name is krishna`);
    
}
setMyName(myName);
//-----------anonymous function using function keyword---------------
// Define a function that accepts a callback
function delayedAction(callback) {
  // Execute the callback after a delay (asynchronous example)
  setTimeout(function() { // Anonymous function used as the callback
    console.log("Action completed after a delay.");
    callback();
  }, 1000);
}

// Call the function, passing an anonymous function as the callback argument
delayedAction(function() {
  console.log("Callback executed.");
});

// Output after 1 second:
// Action completed after a delay.
// Callback executed.
//------------------anonymous using arrow function----------------------
// Define a function that accepts a callback
function processItems(items, callback) {
  items.forEach(item => { // Anonymous arrow function as the callback
    callback(item);
  });
}

const fruits = ['Apple', 'Banana', 'Cherry'];

// Call the function, passing an anonymous arrow function as the callback
processItems(fruits, (fruit) => {
  console.log(`Processing: ${fruit}`);
});

// Output:
// Processing: Apple
// Processing: Banana
// Processing: Cherry

function executeSkill(location , callbackfun){
     callbackfun("HTML" , "CSS" , "JS"   , location);
}

//////////////////////////////////////////////////////
setMyName(function(stuName){
   console.log(`My name is ${stuName}`); 
})

//Lambda
setMyName((stuName)=>{
   console.log(`My name is ${stuName}`); 
})

executeSkill("Bangolore" , (tech1, tech2 , tech3  , locname)=>{
    console.log(`MY skill set is now ${tech1} , ${tech2} & ${tech3}`);
    console.log(`Location is ${locname}` );
});