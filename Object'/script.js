// let add = {
//     name : "Shubham",
//     Admission_number : 170,
//     age : 18,
//     skills : {
//         first : "Html, Css, Js",
//         second : "Graphic Designing",
//     },
//     state : "Himachal Pradseh",
// };
// console.log(add);



// let obj = {

// }
// obj.name = "Tiny";
// obj.age = 19;

// console.log(obj);

   
//                                 Add and Remove

// let get = {
//     name : "Shubham",
//     Admission_number : 170,
//     age : 18,
// };
// get.course = "B.Tech.";                     // Add
// delete get.age;                            // Remove
// delete get ["Admission_number"];
// console.log(get);


// const student = {
//     name : "Shubham",
//     age : 18,
//     Admission_number : 170,
//     batch : "Super60"
// };

// // console.log(student);
// let exist = ("batch" in student);
// console.log(exist);



// let student = {
//     name : "Shubham",
//     Admission_number : 170,
//     age : 18,
//     skills : {
//         first : "Html, Css, Js",
//         second : "Graphic Designing",
//     },
//     state : "Himachal Pradseh",
// };
// console.log(student);

// let exist = ("first" in student.skills);
// console.log(exist);


//    Update

// const car = {
//     milage : "20",
//     speed : "60km/h",
//     color : "red"
// };
// console.log(car);

// car.milage = "35";
// car.speed = "85km/h";
// car.color = "blue";

// console.log(car);


//       Function inside an object

const bike = {
    name : "Bullet",
    print : function(){
        console.log("this bike is "+ this.name);
    }
};
bike.print();


















//                                  Homework


//  Q1
// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };
// console.log(marks.maths+ marks.science+marks.english);


// Q2
// let marks = {
//   maths: 80,
//   science: 90,
//   english: 70
// };

// let highestSubject = "";
// let highestMarks = 0;

// for (let subject in marks) {
//   if (marks[subject] > highestMarks) {
//     highestMarks = marks[subject];
//     highestSubject = subject;
//   }
// }
// console.log(highestSubject, highestMarks);

// Q3
// let input = {
//     a : 2,
//     b : 3,
// };
// for(let val in input){
//     input[val] = input[val]*2;
// }

// console.log(input);


// Q4
// let user = {
//     profile : {
//         name :"Shubham",
//         age : 18,

//         address : {
//             district : "Bilaspur",
        
//             city : {
//                 city : "",
//             }
//         }
//     }
// }

// console.log(user.profile.address.city.city || "Not Found");

// Q5

// let count ={
//     a:1,   
//     b:{
//         x:2,
//         y:3
//     }
// }



// Q6
// let student = {
//     name : "Shubham",
//     Admission_number : 170,
//     age : 18,
//     skills : {
//         first : "Html, Css, Js",
//         second : "Graphic Designing",
//     },
//     state : "Himachal Pradseh",
// };
// console.log(student);

// let exist = ("first" in student.skills);
// console.log(exist);


// Q7
// let sum = {a:10, b:{x:5, y:15}};
// console.log(sum.a + sum.b["x"]+sum.b["y"]);

