function days(){
    a=parseInt(document.getElementById("days").value)
    if(a==1){
        alert('monday')
    }
    else if(a==2){
        alert('tuesday')
    }
    else if(a==3){
        alert('wednesday')
    }
    else if(a==4){
        alert('thursday')
    }
    else if(a==5){
        alert('friday')
    }
    else if(a==6){
        alert('saturday')
    }
    else if(a==7){
        alert('sunday')
    }
    else{
        alert('invalid number!')
    }
}