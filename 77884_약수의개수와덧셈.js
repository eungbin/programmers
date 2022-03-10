function solution(left, right) {
  var answer = 0;
  
  for(let i=left; i<=right; i++) {
      if(yak(i)%2 === 0) answer += i;
      else answer -= i;
  }
  return answer;
}

function yak(num) {
  if(num === 1) return 1;
  let yakAmount = 2;
  for(let i=2; i<num; i++) {
      if(num%i === 0) yakAmount += 1;
  }
  return yakAmount;
}