// ex1:
function func1 () {
  return { message: 'hello_world' };
}

function func2 () {
  return;
  { message: 'hello_world'; };
}
// output:
console.log('func1 returns:', func1());
console.log('func2 returns:', func2());
// ex2:
(function () {
  console.log('a');
  setTimeout(() => console.log('b'), 1000);
  setTimeout(() => console.log('c'), 0);
  console.log('d');
})();

// output:
// a
// d
// c
// b

// ex3:
{
  const b = 1;
  function outer () {
    const b = 3;
    function inner () {
      b++;
      var b = 5;
      console.log(b);
    }
    inner();
  }
  outer();
}
// output: 5
{
  const b = 1;
  function outer () {
    const b = 3;
    function inner () {
      b++;
      var b = 5;
      console.log(b);
    }
    inner();
  }
  outer();
}
// output: 5

// ex4:
const a = {};
const j = { key: 'j' };
const k = { key: 'k' };

a[j] = 876;
a[k] = 543;

console.log(a[j]);
// output: 543

// ex5:

{
  var x = 25;

  function print () {
    console.log(x);
    var x = 26;
  }

  print();
}
// output: undefined
{
  var x = 25;

  function print () {
    console.log(x);
    let x = 26;
  }

  print();
}
// output: ReferenceError: Cannot access 'x' before initialization
