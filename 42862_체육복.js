function solution(n, lost, reserve) {
  let answer = 0;
  let students = new Array(n).fill(1); // 학생들이 가지고 있는 체육복 개수
  
  // 잃어버렸을 경우 -1, 여벌이 있을 경우 +1
  for(let i=0; i<students.length; i++) {
      if(lost.includes(i+1)) students[i] -= 1;
      if(reserve.includes(i+1)) students[i] += 1;
  }
  
  // 체육복 빌려주기
  for(let i=1; i<students.length; i++) {
      if(students[i] === 2 && students[i-1] === 0) {
          students[i] -= 1;
          students[i-1] += 1;
      } else if(students[i] === 0 && students[i-1] === 2) {
          students[i] += 1;
          students[i-1] -= 1;
      }
  }
  
  for(s of students) {
      if(s >= 1) answer += 1;
  }
  return answer;
}