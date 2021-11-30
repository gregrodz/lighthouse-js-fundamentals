const loopyLighthouse = function (range, multiples, words) {
  const startRange = range[0];
  const endRange = range[1];
  const firstMultiple = multiples[0];
  const secondMultiple = multiples[1];
  const firstWord = words[0];
  const secondWord = words[1];

  for (let i = startRange; i <= endRange; i++) {
    let varToPrint;
    if (i % firstMultiple === 0 && i % secondMultiple === 0) {
      varToPrint = firstWord + secondWord;
    } else if (i % firstMultiple == 0) {
      varToPrint = firstWord;
    } else if (i % secondMultiple == 0) {
      varToPrint = secondWord;
    } else {
      varToPrint = i;
    }
    console.log(varToPrint);
  }
};

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
