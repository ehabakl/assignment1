function createCounter(initial = 0) {
  let count = initial; 

  return {
    increment() {
      count++;
      return ;
    },
    decrement() {
      count--;
      return ;
    },
    getCount() {
      return count;
    },
    reset() {
      count = initial;
    },
  };
}

const counter = createCounter(5);
counter.increment()
counter.increment()
console.log(counter.getCount()); // 7
console.log(counter.count);  