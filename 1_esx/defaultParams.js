function sayHello (prefix = 'Mr.', name, x = 'y', y = 123) {
  console.log(`Hello, ${prefix} ${name}`);
}
sayHello(); // Hello, Mr. guest
sayHello(undefined, undefined); // Hello, Mr. guest
sayHello(undefined, 'John'); // Hello, Mr. John
sayHello('John', 'Doe'); // Hello, John Doe
