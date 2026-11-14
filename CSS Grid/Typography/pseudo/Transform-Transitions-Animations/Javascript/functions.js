
// Function creation without parameters


// function message(){
//     console.log("Function is executed successfully");
// }
// message();



// Default function 


// function stdName(name="Uday"){

//     console.log(name);
// }
// stdName();


// Function with parameters 


// function add(a , b){
//     return a + b;
// }
// // add(10,30);


// fuction with parameter using Rest Operator(...parameters name)


// function num(...numbers){
//     return numbers;
// }
// num(10,20,30,40, 50,80,40,48,90);




// global scope 

//    let  name = "Sudheer";
//    function msg(){

//     console.log(name);
//    }
//    msg();
//    console.log("The variable can be accessed globally"+name);


// block scope


// function block(){
//     let age=18;
//     console.log("He/She age is :  "+ age);

// }
// block();
// console.log(age);



// function scope 


// if(true){

//     const college = "Malla Reddy College";
//     console.log("The name of the college is -- " + college );
//     console.log(college);
// }
// console.log(college); 


// Lexical scope 
 
 
// function outer(){

//     let name = "Uday";
//     function inner(){
//         console.log(name);

//     }
//     inner();
// }
// outer();
// console.log("The student name is : " + name );



// Closure scope 

// function outer(){
//     let count =0; // last 4 number public access
//     function inner(){  /// complete number 
//         count++;
//         console.log(count);
//     }
//     inner();
// }
// outer();




// Arrow function  


//  const message=()=>{
//     console.log("Hello how are you");

//  };