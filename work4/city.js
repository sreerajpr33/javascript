function city(){
        c=document.getElementById("city").value
        
        if(c=='delhi'){
            document.getElementById("h1").innerHTML='Red Fort'
        }
        else if(c=='agra'){
            document.getElementById("h1").innerHTML='Taj Mahal'
        }
        else if(c=='jaipur'){
            document.getElementById("h1").innerHTML='Hava Mahal'
        }
        else{
            document.getElementById("h1").innerHTML='invalid city'
        }
    }