// function count(expression){ //Task1
//     function getValues(expression){
//         let values = [...expression]
//         // debugger
//         return values;
//     }
//         let values = getValues(expression);
//     switch (values[1]){
//       case '+':
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// }
// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     // return values[1] - values[2];
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     // return values[1] * values[2];
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     // return values[1] / values[2];
//     return +values[0] / +values[2];
// }
// // concole.log(count('5 - 2'));
// // try {                           ///Task 2
// //     if (count('4 / 0')) {
// //         throw new SyntaxError("Can't divide by 0")
// //     } else {
// //         console.log("Can't divide by 0");
// //     }
// // }
// // catch (error) {
// //     console.log(error);
// // }

// try {                           ///Task 2.1
//     if (count('4 / 0')) {
//         throw new SyntaxError("Can't divide by 0")
//     } else {
//         console.log("Can't divide by 0");
//     }
// }
// catch (error) {
//     console.log(error);
// }finally {
//         console.log(0);
//     }

// function count(expression) { //Task3
//     function getValues(expression) {
//         let values = [...expression]
//         return values;
//     }
// }
// let values;
// try {
//     let data = Values(expression);
//     function data(values);
//     throw new Error('ReferenceError: Values is not defined');
// } catch (error) {
//     console.log(error.name + ':' + error.message)
//     values = [0, '+', 0];
// }
// switch (values[1]){
//       case '+':
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return +values[0] - +values[2];
// }
// function multiply(values) {
//     return +values[0] * +values[2];
// }
// function divide(values) {
//     return +values[0] / +values[2];
// }


function MakeUsers(name, age){ //Task 4
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');
function showMovie(user) {
 if(user.age >= 18){
    console.log('You can watch this movie');
} else {
    console.log('Sorry, you are too young');
}   
}
try {
    showMovie(user);
} catch (error) {
   prompt(user); 
}




