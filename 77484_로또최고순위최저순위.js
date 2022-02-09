function solution(lottos, win_nums) {
  var answer = [];
  var sameNums = 0;
  lottos.sort();
  win_nums.sort();
  
  for(var i=lottos.length-1; i>=0; i--) {
      if(lottos[i] === 0) break;
      var result = win_nums.findIndex(x => x === lottos[i])
      if(result !== -1) sameNums += 1;
  }

  if(sameNums === 0 && i === -1) answer.push(6);
  else answer.push(7-sameNums-(i+1));
  
  if(sameNums === 0) answer.push(6);
  else answer.push(7-sameNums);
  
  return answer;
}