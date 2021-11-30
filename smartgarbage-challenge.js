const smartGarbage = function (trash, bins) {
  if (trash == 'waste') {
    bins['waste'] += 1;
  } else if (trash == 'recycling') {
    bins['recycling'] += 1;
  } else if (trash == 'compost') {
    bins['compost'] += 1;
  }
  let result = bins;
  return result;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }
