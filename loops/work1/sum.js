function sum(){
    a=parseInt(document.getElementById("num").value)
    b=0;
    for(i=0;i<=a;i++)
        b+=i
    document.getElementById("h1").innerHTML=b
}