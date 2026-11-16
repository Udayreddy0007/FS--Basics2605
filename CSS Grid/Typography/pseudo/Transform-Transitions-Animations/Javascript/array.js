

// Creation of  Array general way

// let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
// console.log(students);


// Creation of array using constructor 

// let students = new Array("Sudheer","Uday","Aishwarya","Pranavi","Reddy");
// console.log(students);


// Accessing the last element in an array 

// let students = new Array("Sudheer","Uday","Aishwarya","Pranavi","Reddy");
// console.log(students[students.length-1]);



// Reading an array  
  
    // let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];

    //      result = students[1];
    //      console.log(result);


// Updating an array element  



//  let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
    
//     students[1] = "Uday Reddy";
//     console.log(students);


// For-each loop 

   
// let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];

// for(let student of students){

//     console.log(student);
// }


// for-each loop using function 

 
// let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
//      students.forEach(function(std){

 
//        console.log(std);


//     });


// Methods in  array 
  
 
 
//Push

// let students = ["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
   
// students.push("Mounik");
// console.log(students);


// Pop
// let students =["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
  
// students.pop();
// console.log(students);


// Unshift
// let students =["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
  
// students.unshift("Mounik");
// console.log(students);


// Shift 

// let students =["Sudheer","Uday","Aishwarya","Pranavi","Reddy"];
  
//  students.shift();
//  console.log(students);


// Nested Array 
   
    //  let students =[ ["Sudheer",11] ,["Pranavi", 10] , ["Aishwarya" , 9] ];

    //   console.log(students[0]);
    //   console.log(students[1]);
    //   console.log(students[2]);

      // accessing the values inisde the elements 

    // console.log(students[0][0]);
    // console.log(students[0][1]);

    // console.log(students[1][0]);
    // console.log(students[1][1]);

    // console.log(students[2][0]);
    // console.log(students[2][1]);



    // array methods 

    // 1. MAP 



    // let numbers =[10,20,40,50,60,70];

    // let result = numbers.map(function(num){

    //   // let newArray = Array.method(function(value,index,array))

    //   return num * 2;


    // });
    //     console.log(result);




    // 2. Filter 

     
    // let newArray = Array.method(function(value,index,array))
    // return condition

    // let numbers =[10,20,40,50,60,70];

    // let result = numbers.filter(function(num){

           
    //   return num > 25;


    // });

    // console.log(result);


  // 3. Find 

    
  // let numbers =[10,20,40,50,60,70];

  //   let result = numbers.find(function(num){

           
  //     return num > 25;


  //   });

  //   console.log(result);


  //4.  Some 


    
  // let numbers =[10,20,40,50,60,70];

  //   let result = numbers.some(function(num){

           
  //     return num > 25;


  //   });

  //   console.log(result);
  


  // 5 . Every 

    
  // let numbers =[10,20,40,50,60,70];

  //   let result = numbers.every((num)=>{

           
  //     return num > 25;


  //   });

  //   console.log(result);


  // 6. Reduce


    
  // let numbers =[10,20,40,50,60,70];

  //   let result = numbers.reduce(function(sum ,value ){
      // arrayname = array.method(function(accumelator,  current value){

      
      // return sum + value;
       //  return  acc + curr; // intial value + current value //

    // },0);
    // },intial value);
    

    // console.log(result);



    // 7 . Sorting an array 

    // let numbers = [20,40,14,3,10,70];

    // let res = numbers.sort(function(a , b){

    //   // return  a - b;
    //    return b - a;

    // });
    // console.log(res);