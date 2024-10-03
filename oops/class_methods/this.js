d={
    firstname:'sree',
    lastname:'raj',
    age:20,
    full_name:function() {
        return this.firstname+this.lastname
    }
}
console.log(d.full_name());
