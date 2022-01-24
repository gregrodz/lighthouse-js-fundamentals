const sayHello = function () {
  alert('Hello');
  setTimeout(clearInterval(timer), 10000);
};
const timer = setInterval(sayHello, 3000);
