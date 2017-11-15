
let hasProxy = {
  has(target, key) {
    if (key == 'name') {
      return false
    }
    return key in target
  },
  get(target, property) {
    if (property == 'name') {
      return 'joyce'
    }
    return target[property];
  }
}

let target1 = new Proxy({name:'dillon', age:28}, hasProxy);

console.log(target1.name);
console.log(target1.age);
console.log('name' in target1);
console.log('age' in target1);


function wait10Secs(ms) {
  var promoise = new Promise((resolve, reject) => {
    console.log('Start wait...');
    setTimeout(() => {
      resolve('Hello Dillon! ' + ms)
    }, ms);
  });

  return promoise
}

wait10Secs(3000).then(value => {
  console.log(value);
  return wait10Secs(2000);
}, err => {
  console.log(err);
}).then(value => {
  console.log(value);
  return wait10Secs(1000);
}, err => {
  console.log(err);
}).then(value => {
  console.log(value);
}, err => {
  console.log(err);
});


let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});


let set = new Set([1, 2, 3]);
for (let i of set) {
  console.log(i);
}

let arr = Object.create(null);
arr.length = 10;
arr[Symbol.iterator] = function() {
  let arrow = 0;
  return {
    next() {
      return {
        value: arrow > arr.length ? 0 : arrow++,
        done: arrow > arr.length
      }
    }
  }
}

for (let i of arr) {
  console.log(i)
}



let set2 = new Set().add('a').add('b').add('c').add('d');
let [x, ...rect] = set2
console.log(x);
console.log(rect);

let name = 'dillon'
let arr3 = [...name]
console.log(typeof arr3)


var myIterator = {}
myIterator[Symbol.iterator] = function *() {
  let x = 0
  yield x = 1;
  yield x = 2;
  yield x = 3;
  yield x = 4;
}

console.log([...myIterator]);
