
for (let repeat = 100; repeat <= 200 ; repeat++) {
  let number = repeat;
  if ((number % 3 === 0) && (number % 4 === 0)) {
    number = "LoopyLighthouse"
  }
  else if (number % 3 == 0) {
    number = "Loopy"
  }
  else if (number % 4 == 0) {
    number = "Lighthouse"
  }
  console.log(number);
}

