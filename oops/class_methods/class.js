class cars {
    constructor(name,year ) {
        this.name=name
        this.year=year
    }
    display(){
        console.log(this.name,this.year);
        
    }
}
wolkvagon= new cars('porsche',2021)
wolkvagon.display()
