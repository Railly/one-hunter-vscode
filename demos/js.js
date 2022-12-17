// Description: JavaScript demos
function multiplyMatrix(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

/**
 * JSDoc comment
 * @param {string} name
 * @param {number} age
 */

const arrowNameAge = (name, age) => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  while (age < 18) {
    age++;
  }
  return name + age;
}


export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

const person = new Person('John', 18);

const myObj = {
  name: 'John',
  age: 18,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  }
}

const myProxy = new Proxy(myObj, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return 'Not found';
  }
});

const myArray = [1, 2, 3, 4, 5];
const ga = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return {
          value: myArray[i++],
          done: i > myArray.length
        };
      }
    };
  }
}

const mySet = new Set([1, 2, 3, 4, 5]);

const myMap = new Map([
  ['name', 'John'],
  ['age', 18]
]);

const token = window.localStorage.getItem('token');

const [a, b, c] = [1, 2, 3];