l=[1,2,3,4,5,6]
console.log(l[0]);
console.log(l.length);
a=l.toString()
console.log(typeof a);
l.pop()
console.log(l);
l.push('wiz')
console.log(l);

l.shift()
console.log(l)
l[2]='s'
console.log(l);
l.unshift(2000)
console.log(l);
// delete l[4]
// console.log(l);

for(let i of l){
    // console.log(l[i]);
    console.log(i)
    if(i==5){
        break
    }
}






