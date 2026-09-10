console.log("1 - synchronous");

setTimeout(() => {
  console.log("4 - timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - microtask");
});

console.log("2 - synchronous");

/*
Expected:
1 - synchronous
2 - synchronous
3 - microtask
4 - timer

Use this file to understand why Promise callbacks
run before timers after the current call stack clears.
*/
