function tax(){
    a=parseInt(document.getElementById("bike").value)
    if(a>100000){
        b = a * 0.15;
        document.getElementById("h1").innerHTML=b
    }
    else if(a> 50000 && a<= 100000 ){
        b= a * 0.10;
        document.getElementById("h1").innerHTML=b
    }
    else if(a<= 50000){
        b= a * 0.05;
        document.getElementById("h1").innerHTML=b
    }
}