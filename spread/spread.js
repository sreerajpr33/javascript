l=[1,2,3,4]
// l1=[...l,5,6]
// console.log(l1);

// d={name:'abc',age:24}
// d1={...d,place:'ekm',name:'GTR',age:20}
// console.log(d1);

const[a,...b]=l
console.log(a);
console.log('b=',b);

d={name:'abc',age:24,place:'ekm'}

const{name,...d1}=d
console.log(name);
console.log(d1);

