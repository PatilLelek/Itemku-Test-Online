function solution(N, users) {
  let numberPlayer = users.length;
  let currentPlayer = [...users];
  let stageResume = []

  for (let index = 0; index < N; index++) {
    const reducePlayer = currentPlayer.filter(item => item == index + 1);
    stageResume.push([index+1, reducePlayer.length/numberPlayer])
    numberPlayer = numberPlayer - reducePlayer.length;
  }

  const sortResume = stageResume.sort((x, y) => y[1] - x[1]);
  const answer = sortResume.map(item => item[0]);
  return answer;
}