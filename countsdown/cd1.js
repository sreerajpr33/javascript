function demo(){
const main=document.querySelector('.main')
const div=document.createElement('div')
let count1=3
let count2=5
let c=setInterval(function(){
    div.innerHTML=`<h2>${count1}:${count2}</h2>`
    count2--
    if(count2==0){
        count1--
        count2=5
        // return
    }
    if(count1==-1){
        clearInterval(c)
        div.innerHTML=`<h2>complate</h2>`
    }
    
},1000);
main.appendChild(div)
}
demo()