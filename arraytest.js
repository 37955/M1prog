let listArray = ["Aardappel","Tomaat",2,3,true];
let newArray = ["Komkommer","Paprika"];
console.log(listArray);
 
listArray.push(4);
console.log(listArray);
 
let popped = listArray.pop();
console.log(listArray);
 
listArray.shift();
console.log(listArray);
 
listArray.unshift("Aardappel");
console.log(listArray);
 
listArray[4] = "false";
console.log(listArray);
 
listArray.splice(0, 2);
console.log(listArray);
 
let anderArray = listArray.concat(newArray);
console.log(anderArray);