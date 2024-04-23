// write code here
const scores = [
  { score: 90, subject: 'HTML', weight: 0.2 },
  { score: 95, subject: 'CSS', weight: 0.3 },
  { score: 85, subject: 'JavaScript', weight: 0.5 }
];

function weightedAverage(scores) {
  let sumScoreTimesWeight = scores.reduce((acc, item) => acc + (item.score * item.weight), 0);
  let sumWeights = scores.reduce((acc, item) => acc + item.weight, 0);
  return sumScoreTimesWeight / sumWeights;
}

console.log(weightedAverage(scores)); 
