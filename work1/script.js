function salary(){
    a=parseInt(document.getElementById("exp").value)
    b=parseInt(document.getElementById("sal").value)
    if(a>=5){
        alert('your salary has increased!')
        c = b + (b * 0.05);
        document.getElementById("h1").innerHTML=c
    }
    else{
        alert('no change!')
    }
}