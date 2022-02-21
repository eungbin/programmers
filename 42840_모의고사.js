// solution 1
function solution(answers) {
  const answer = [0, 0, 0];
  const returnAnswer = [];
  const secondAnswer = [0, 1, 0, 3, 0, 4, 0, 5];
  
  for(let i=0; i<answers.length; i++) {
      let third = i%10;
      if((i%5)+1 === answers[i]) answer[0] += 1;
      if(i%2 === 0 && answers[i] === 2) answer[1] += 1;
      if(i%2 === 1 && answers[i] === secondAnswer[i%8]) answer[1] += 1;
      if(third < 2 && answers[i] === 3) answer[2] += 1;
      else if(third >= 2 && third < 4 && answers[i] === 1) answer[2] += 1;
      else if(third >= 4 && third < 6 && answers[i] === 2) answer[2] += 1;
      else if(third >= 6 && third < 8 && answers[i] === 4) answer[2] += 1;
      else if(third >= 8 && third < 10 && answers[i] === 5) answer[2] += 1;
  }
  
  answer.map((i, idx) => {
      if(i === Math.max(...answer)) returnAnswer.push(idx+1)
  });
  
  return returnAnswer;
}

//solution 2
function solution(answers) {
  const returnAnswer = [];
  const answer = [];
  const firstAnswer = [1, 2, 3, 4, 5];
  const secondAnswer = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5 ,5];
  
  answer.push(answers.filter((a, idx) => a === firstAnswer[idx%firstAnswer.length]).length);
  answer.push(answers.filter((a, idx) => a === secondAnswer[idx%secondAnswer.length]).length);
  answer.push(answers.filter((a, idx) => a === thirdAnswer[idx%thirdAnswer.length]).length);
  
  const maxAnswer = Math.max(...answer);
  
  answer.map((i, idx) => {
    if(i === maxAnswer) returnAnswer.push(idx+1);  
  })
  
  return returnAnswer;
}