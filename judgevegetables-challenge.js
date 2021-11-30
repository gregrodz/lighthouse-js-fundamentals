const judgeVegetable = function (vegetables, metric) {
  let byMetric = vegetables.slice(0);
  byMetric.sort(function (a, b) {
    return a[metric] - b[metric];
  });
  return byMetric[byMetric.length - 1]['submitter'];
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3,
  },
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
