/**
 * В каком порядке выведутся логи
 */

console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});
