
// let factorial = (n) => {
//     if(n==0){
//         return 1;
//     }else{
//         return n * factorial(n-1);
//     }
  
// }
// console.log("Factorial is ======>",factorial(5));

let simpleCount=0;
fiboSimple=(n)=>{
    simpleCount=simpleCount+1;
    if(n<2){
        return 1;
    }
    return fiboSimple(n-1)+fiboSimple(n-2);
}

console.log("Nth term of fibonacci series is  ======>",fiboSimple(5));
console.log("number of time fiboSimple is called==============>",simpleCount);

console.log("*********************************************************");

let dynamicCount = 0;
let mem=[0,1];
fiboDynamic=(n)=>{
    dynamicCount=dynamicCount+1;
    if(mem[n]) return mem[n];
    if(n<=1){
        return 1;
    }
    result= fiboSimple(n-1)+fiboSimple(n-2);
    mem[n]=result;
    return mem[n];
}

console.log("Nth term of fiboDynamic series is  ======>",fiboDynamic(5));
console.log("number of time fiboDynamic is called==============>",dynamicCount);
console.log("mem==============>",mem);


