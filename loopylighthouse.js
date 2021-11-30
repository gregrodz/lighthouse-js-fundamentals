for (let i = 100; i <= 200; i++) {
  let varToPrint = i;
  if (i % 3 === 0 && i % 4 === 0) {
    varToPrint = 'LoopyLighthouse';
  } else if (i % 3 == 0) {
    varToPrint = 'Loopy';
  } else if (i % 4 == 0) {
    varToPrint = 'Lighthouse';
  }
  console.log(varToPrint);
}
