// solve 1
function solution(nums) {
  let answer = 0;
  let pocketObj = {};
  nums.reduce((acc, cur) => {
      pocketObj[cur] = 1;
  })
  let amount = Object.keys(pocketObj).length;
  let pick = nums.length/2;
  
  if(amount >= pick) answer = pick;
  else answer = amount;
  
  return answer;
}