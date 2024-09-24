function calculateFactorial(){
    a=parseInt(document.getElementById("w").values)
    fact=1;
    i=1;
    // if (a < 0) {
    //     console.log("not defined");
    //     return;
    // }
    do {
        fact *= a;    
        i++; 

    }
    while (i<=a);
    console.log(fact);
}