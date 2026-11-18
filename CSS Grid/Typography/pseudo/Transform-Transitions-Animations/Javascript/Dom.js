

// getElementByID 

 let heading = document.getElementById("heading").innerText ="learning DOM fundamentals";
 console.log(heading);


 // querySelector 


  let par = document.querySelector("#para");
//   console.log(par);
   
// par.style.color ="red";
par.style.backgroundColor="lightyellow";
// par.style.="5px black";


//querySeclectorAll


let cls = document.querySelectorAll(".name").forEach(function(value)
 {
    value.style.color="green";
});
// console.log(cls);




 
   
     