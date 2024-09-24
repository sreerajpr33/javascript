d=[{name:'s',age:30,place:'ekm'},{name:'a',age:20,place:'ekm'},{name:'t',age:26,place:'ekm'},{name:'u',age:15,place:'ekm'},{name:'s',age:40,place:'ekm'}]
s=[]
u=[]
for(let i of d){
    if(i.age>=30){
        s.push(i)
    }  
    else{
        u.push(i)
    }           
}
console.log(s,'above:30');
console.log(u,'below 30');


