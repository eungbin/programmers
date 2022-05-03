function solution(a, b) {
  let answer = '';
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const yo = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let days = 0;
  
  for(let i=1; i<a; i++) {
      days += month[i-1];
  }
  days += b;
  
  answer = yo[(days+4)%7];
  return answer;
}