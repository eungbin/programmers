function solution(s) {
  var answer = 0;
  var wordList = ["zero", "one", "two", "three", "four", "five",
                 "six", "seven", "eight", "nine"]
  
  for(var i=0; i<wordList.length; i++) {
      var replace = "regex";
      var reg = new RegExp(wordList[i],"g");
      s = s.replace(reg, i);
  }
  answer = parseInt(s);
  return answer;
}