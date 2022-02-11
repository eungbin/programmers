function solution(new_id) {
  var answer = '';
  
  answer = new_id.toLowerCase().
           replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/g, "").
           replace(/\.+/g, ".").
           replace(/^\.|\.$/g, "").
           replace(/^$/, "a").
           slice(0, 15).replace(/\.$/, "");
  
  while(answer.length < 3) {
      if(answer === "") answer = "a";
      answer += answer[answer.length-1];
  }
  
  return answer;
}