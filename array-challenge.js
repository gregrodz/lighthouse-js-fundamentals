let range = function (start, end, step) {
  let answer = [];
  if (!start && !end && !step) {
    return answer;
  } else if (start > end) {
    return answer;
  } else if (step <= 0) {
    return answer;
  } else {
    for (let i = start; i <= end; i += step) {
      answer.push(i);
    }
    return answer;
  }
};
console.log(range(10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
