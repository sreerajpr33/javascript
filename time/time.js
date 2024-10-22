console.time("for loop");
for (let i = 0; i < 1000000; i++) {
  // some code
}
console.timeEnd("for loop");

let i = 0;
console.time("while loop");
while (i < 1000000) {
i++
}
console.timeEnd("while loop");
