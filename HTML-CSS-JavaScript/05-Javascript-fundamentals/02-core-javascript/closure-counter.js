function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment() {
      return ++value;
    },
    decrement() {
      return --value;
    },
    getValue() {
      return value;
    }
  };
}

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getValue());
