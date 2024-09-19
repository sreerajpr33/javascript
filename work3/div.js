function div(){
a=parseInt(document.getElementById("divs").value)
if(a%3==0){
    document.getElementById("h1").innerHTML='divisible by 3!'
}
else{
    document.getElementById("h1").innerHTML=' not divisible by 3!'
}
}