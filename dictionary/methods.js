l={name:'anu',age:20,place:'ekm'}
// console.log(l);
// console.log(l.age);
// console.log(l.name);

// l.place='tri'
// l.lang='malayalam'
// console.log(l);
delete l.age
console.log(l);

for (let i in l){
    if(l['age']==20){
        console.log(i,l[i]);
}
}



