function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    c=parseInt(document.getElementById("tno").value)
    if(a>b && a>c){
        document.getElementById("h1").innerHTML=a 
    }
    else if(b>a && b>c){
        document.getElementById("h1").innerHTML=b
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
    
}