// -----looping mechanism repeatly executes the your block of code until condition is gets false

// while 
// do--while


// for
// for...in  -- to iterates over te properies of an object
// for...of


let rule = 0;

while(rule < -1)
{
  console.log("Hello");
  rule = rule + 1;
}


//------------------------------------------------------

let index = 0
do
{
  console.log("Index is " , index);
  index = index + 1;
}
while(index < -1)

//---------------------------------------------------

let student = { 
                name: "Madan", 
                course: "JS"  ,
                location : "Bangolore"
              };
//repeating the object for the keys 
//
for(let abc in student){
    console.log("key is " , abc);
    console.log("now" , student[abc]);
}

            //   student.name
            //   student[name]

let fruits = ["Kiwi", "Mango", "grapes"];
for(let fruit of fruits){
    console.log(fruit);
    if(fruit == "Kiwi"){
         console.log("Kiwi price is " , 200);
    }
}



//for()