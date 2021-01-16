// Test Case 1
const tournamentHighestScores = [100, 100, 50, 40, 40, 20, 10];
const davidScores = [5, 25, 50, 120];
// Test Case 2
// const tournamentHighestScores = [100, 90, 90, 80, 75, 60];
// const davidScores = [50, 65, 77, 90, 102];
const rankings = [];
tournamentHighestScores.forEach((item, i) => {
  if (i === 0) {
    rankings.push({ item: 1 });
  } else if (tournamentHighestScores[i] < tournamentHighestScores[i - 1]) {
    rankings.push({ item: rankings[i - 1].item + 1 });
  } else if (tournamentHighestScores[i] === tournamentHighestScores[i - 1]) {
    rankings.push({ item: rankings[i - 1].item });
  }
});
const davidScoresRankings = [];
davidScores.forEach((item) => {
  const leastScore = tournamentHighestScores.filter(sc => sc < item);
  const matchScore = tournamentHighestScores.find(sc => sc === item);
  if (matchScore) {
    const matchedmultipleScoreIndex = tournamentHighestScores.indexOf(matchScore);
    const getRanking = rankings[matchedmultipleScoreIndex];
    davidScoresRankings.push(getRanking.item);
  } else if (leastScore.length === 0) {
    davidScoresRankings.push(rankings[rankings.length - 1].item + 1);
  } else if (leastScore.length) {
    const matchedmultipleScoreIndex = tournamentHighestScores.indexOf(leastScore[0]);
    const getRanking = rankings[matchedmultipleScoreIndex];
    davidScoresRankings.push(getRanking.item);
    
  }
});
console.log(davidScoresRankings);

