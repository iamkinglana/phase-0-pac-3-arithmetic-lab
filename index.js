function add(x, y) {
    return x + y;
  }

let x = subtract(4, 3);   // Function is called, return value will end up in x

  function subtract(a, b) {
    return a - b;             // Function returns the product of a and b
  }

  function multiply(a, b) {
    return a * b;   
 }
 function divide(a, b) {
    return a / b;   
 }

 let n = 1;
while (n <= 10) {
  console.log(n);
  counter = counter + 1;
}

var i = 0;

function increment(n){

  n++;
  return n;
}

i=increment(i);

var d = 0;

function decrement(n){

  n--;
  return n;
}

d=decrement(d);

//parsing

function makeInt(n){

   (parseInt(n, 10));
}
makeInt();


function makeInt(n) {

  return (parseInt(n, 10));
}
makeInt("2")

//return NaN

function preserveDecimal(n){
  (parseInt("", 10));

}


function preserveDecimal(n){
  return parseFloat(n);
}

preserveDecimal(3.14);
