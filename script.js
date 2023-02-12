1.How to compare two JSON have the same properties without order?

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


2.Rest countries display all the country flags 

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let res=JSON.parse(request.response);
         for (var i=0;i<res.length;i++){
        console.log(res[i].flags);
     }
};
 
 3.Rest countries print all countries names,regions,sub region & populations

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var res1=JSON.parse(request.response);
         for (var i=0;i<res1.length;i++){
        console.log("countries : "+res1[i].name,", region: "+res1[i].region,", subregion : "+res1[i].subregion,", population : "+res1[i].population);
     }
};
