How to compare two JSON have the same properties without order?

   a. let obj1={name: "Person 1", age:5};
   b. let obj2={age:5, name: "Person"};
   
   To compare two JSON objects that have the same properties without considering the order of the properties, you can convert both objects to strings and then compare the strings. Here's an example in JavaScript
   
   let obj1={name: "Person 1", age:5};
let obj2={age:5, name: "Person"};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

if (str1 === str2) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}
