// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     console.log(a);
//     console.log(b); 
//     alert(a+b)
// }

function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a+b 
}
function sample1(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a-b 
}
function sample2(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a*b 
}function sample3(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a/b 
}
function sample4(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a%b 
}
function sample5(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    if(a>b){
        document.getElementById("h1").innerHTML=a 
    }
    else{
        document.getElementById("h1").innerHTML=b
    }
    
}
