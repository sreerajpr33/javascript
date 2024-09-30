let count=59
let c=setInterval (function(){
    document.getElementById('h1').innerHTML = ""(count);
count--
if(count==0){
    clearInterval(c)
    document.getElementById('h1').innerHTML = "complete";
    
}
},1000)