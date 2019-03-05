let myMap = new Map();

let keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

    // setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

// console.log(myMap.size)
// console.log(myMap.get(keyFunc))

myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
  });

student=[]
student.push("Nishant")
console.log(student)
student.unshift("Singh") //Add element at the beginning
student.unshift('kumar') //Add element at the end
student.pop() 
console.log(student)
 numbers=[1,2,3,4]
mappedArray=numbers.map(x=>x*10)


console.log(mappedArray)



