function button(){
    document.getElementById("phone_error").innerHTML=""
    document.getElementById("invalid_pin").innerHTML=""
    document.getElementById("email_error").innerHTML=""
    name=document.getElementById("name").value
    phno=(document.getElementById("phno").value)
    pin=(document.getElementById("pin").value)
    email=document.getElementById("email").value
    address=document.getElementById("address").value
    console.log(name,phno,pin,email,address);
    if(phno.length!=10 || !phno.match('[6-9].{9}')){
        document.getElementById('phone_error').innerHTML="*invalid number"
    }
    if(pin.length!=6){
        document.getElementById('invalid_pin').innerHTML="*invalid pin"
    }
    if(!email.match("@gmail.com")){
        document.getElementById('email_error').innerHTML="*email error"
    }
}