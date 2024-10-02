function demo(){
const main=document.querySelector('.main')
const div=document.createElement('div')
let count=10
let c=setInterval(function(){
div.innerHTML=`<h2>00:${count}</h2>`
count--
if(count==0){
    clearInterval(c)
    console.log('complete');
    div.innerHTML=`<h2>complete</h2>`
}
},1000)
main.appendChild(div)
}
demo()