// solution 1
function solution(absolutes, signs) {
  var answer = 0;
  
  for(var i=0; i<absolutes.length; i++) {
      if(signs[i])
          answer += absolutes[i];
      else
          answer -= absolutes[i];
  }
  return answer;
}

// solution 2
function solution(absolutes, signs) {
  var answer = 0;
  
  for(var i=0; i<absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
  }
  return answer;
}