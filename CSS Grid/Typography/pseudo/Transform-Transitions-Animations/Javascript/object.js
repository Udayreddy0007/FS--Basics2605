
// Object creation in JS


// let laptopDetails={

//     name:"HP-VICTUS",
//     storage :"512-GB",
//     userAcc:"Uday",
//     Licence : "12/12/29"
// }

// console.log(laptopDetails.name+'\n'+laptopDetails.storage+'\n'+laptopDetails.userAcc+'\n'+laptopDetails.Licence);



// Accessing the properties using square brackets 

 
//    let emplyDetails = {

//     empyName: "Uday",
//     empyId: "14R7",
//     emyDept: "IT",
//     salary : 10000
//    }
//    console.log(emplyDetails["empyId"]);




// Object method 


   
// let companyDetails ={

//     name:"Amazon",
//     location:"Hyderabad",
//     pincode:500092,
//     message:function(){

//         console.log("Welcome to the  campus"+this.name+','+this.location);
//     }
// }
// console.log(companyDetails.message());



// Updating the existing property value 


//  let productDetails = { 

//       prdName:"MacBook AIR 13th",
//       prdCost : "$50,000",
//       prdColor : "Glaicer",
//       prdStorage:"1TB"

//  }
// //   productDetails.prdName = "HP Omni";
// delete productDetails.prdName;
//   console.log(productDetails.prdName);




//  Nested objects 


//    let company = {           // object1

//       cmpyName:"Apple",
//       Located : "Florida",

//       productDetails:{                 //object 2

//            prdName:"IPHONE 18 PRO MAX",
//            prdCost: "$95000",
//            prdColor : "Black",
//            Manufactured : "US",

//            cusDetails : {                     // object 3

              
//             cusName : "Uday",
//             paymentMode : "Card",
//             cusId : "14R7",
//             cusLoc : "INDIA"

//            }
//       }
//    }

//    console.log(company.cmpyName);
//    console.log(company.productDetails.prdName);
//    console.log(company.productDetails.cusDetails.cusName);




let productDetails={              

           prdName:"IPHONE 18 PRO MAX",
           prdCost: "$95000",
           prdColor : "Black",
           Manufactured : "US"
}

let {prdName,prdCost,prdColor,Manufactured} = productDetails;
console.log(prdColor + prdName+prdCost);
