// 아래 풀이는 시간 초과로 70점 가량 받음
// Solution 1
/* --------------------------------------------------------------------------- */
function solution(id_list, report, k) {
  var idReport_list = [];
  
  id_list.map(i => {
      var test_list = [i];
      firstStep(test_list, report, i);
      idReport_list.push(test_list);
      test_list = [];
  });
  
  var stopAccount = findStopAccount(reportedNumber(idReport_list), k);
  var answer = countMail(idReport_list, stopAccount);
  return answer;
}

function findValue(list, value) {
  var result = list.findIndex(v => v === value);
  return result;
}

function firstStep(testList, report, nowValue) {
  for(var j=0; j<report.length; j++) {
      var reportId = report[j].split(" ")[0];
      var reportedId = report[j].split(" ")[1];
      if(nowValue === reportId) {
          if(findValue(testList, reportedId) === -1) {
              testList.push(reportedId);
          }
      }
  }
}

function reportedNumber(list) {
  var reported_list = [];
  var reported = [];
  var reported_number = 0;
  for(var i=0; i<list.length; i++) {
      reported.push(list[i][0]);
      for(var j=0; j<list.length; j++) {
          if(i === j) continue;
          var result = findValue(list[j], list[i][0]);
          if(result !== -1) reported_number += 1;
      }
      reported.push(reported_number);
      reported_list.push(reported);
      reported_number = 0;
      reported = [];
  }
  return reported_list;
}

function findStopAccount(reported_list, k) {
  var result_list = [];
  for(var i=0; i<reported_list.length; i++) {
      if(reported_list[i][1] >= k) result_list.push(reported_list[i][0]);
  }
  return result_list;
}

function countMail(idReport_list, stopAccount_list) {
  var result_list = [];
  for(var i=0; i<idReport_list.length; i++) {
      var count = 0;
      for(var j=0; j<stopAccount_list.length; j++) {
          if(idReport_list[i][0] === stopAccount_list[j]) continue;
          if(findValue(idReport_list[i], stopAccount_list[j]) !== -1)
              count += 1;
      }
      result_list.push(count);
      count = 0;
  }
  return result_list;
}
/* --------------------------------------------------------------------------- */