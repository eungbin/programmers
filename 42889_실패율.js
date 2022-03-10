// solution 1
function solution(N, stages) {
  const answer = [];
  
  // 각 스테이지별 스테이지에 머물러 있는 플레이어 수 배열
  const stageArr = new Array(N+1).fill(0);
  for(let i=0; i<stages.length; i++) {
      stageArr[stages[i]-1] += 1;
  }
  
  // 각 스테이지 별 실패율 [스테이지, 실패율]
  for(let i=0; i<stageArr.length-1; i++) {
      // 해당 스테이지에 도달한 플레이어 수
      let sum = 0;
      for(let j=i; j<stageArr.length; j++) {
          sum += stageArr[j];
      }
      answer.push([i+1, stageArr[i]/sum]);
  }
  
  // 실패율을 기준으로 정렬
  answer.sort(function(a, b) {
      return b[1] - a[1];
  });
  
  return answer.map(i => i[0]);
}


