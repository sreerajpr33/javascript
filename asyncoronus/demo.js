// console.log('start');
// function display(callback){
//     console.log('dis1');
// }
// function display1(){
//     console.log('dis2');
// }

// console.log('before');
// display(display1)
// console.log('end');

// function display(){
//     console.log('display');
// }
// const a=setInterval(display,1000)

let count=10
let c=setInterval (function(){
console.log(count);
count--
if(count==0){
    clearInterval(c)
    console.log('complete');
    
}
},1000)
