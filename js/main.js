// var arrayStrings = ["vanessa", "alex", "ben", "chris", "roxy"];

// console.log(arrayStrings.length);

// for (var i = 0; i < arrayStrings.length; i++) {
//     console.log(arrayStrings[i].length);
// }

// // console.log(arrayStrings.reverse());
// var copyArray = [];
// for (var i = 0; i < arrayStrings.length; i++) {
//     copyArray.push(arrayStrings[i]);;
// }
// // copyArray.reverse();

// // console.log(arrayStrings.sort());
// var arrayNum = [ 52, 35, 22, 16, 96];

// // console.log(arrayNum.sort());

// var arrayNums = arrayNum.sort(function descendingArray(a, b) {
//     for(var i = 0; i < arrayNum.length; i++) {
//         if (b - a) {
//             console.log(arrayNum[i]);
//             // return arrayNum[i];
//         }
//     }
//     return arrayNum[i]
// });

// console.log(arrayNum.sort().reverse());
var someArray = [];
    // add value of input to empty array


function someFunction() {
    var inputValue = document.getElementById("someValue").value;
    someArray.push(inputValue);
    //loop through array and append each item inside array as a list tiem to the UL in hTML
    var thatUl = document.getElementById("someUl");
    
    for(var i = 0; i < someArray.length; i++) {
        var someText = document.createTextNode(someArray[i]);
        var newLi = document.createElement("li");
        newLi.appendChild(someText);
        thatUl.appendChild(newLi);
    }
}














