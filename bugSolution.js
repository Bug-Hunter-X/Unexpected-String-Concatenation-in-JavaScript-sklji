function foo(a, b) {
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  return a + b;
}
console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // 5
console.log(foo("2", 3)); // 5
console.log(foo("2", "3")); // 5