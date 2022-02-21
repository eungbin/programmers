// solution 1
function solution(nums) {
  var answer = 0;
  
  for(var i=0; i<nums.length-2; i++) {
      for(var j=i+1; j<nums.length-1; j++) {
          for(var k=j+1; k<nums.length; k++) {
              if(sosu(nums[i]+nums[j]+nums[k])) answer += 1;
          }
      }
  }
  
  return answer;
}

function sosu(num) {
  if(num%2 === 0) return false;
  for(var i=2; i<num/2; i++) {
      if(num%i === 0) return false;
  }
  return true;
}
