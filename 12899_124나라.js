function solution(n) {
  var answer = "";
  var listAnswer = divide3(n);
  listAnswer = change124(listAnswer);
  var i = listAnswer.length-1;
  while(i >= 0) {
      answer += String(listAnswer[i]);
      i -= 1;
  }
  return answer;
}

function divide3(n) {
  var mok = change(n/3);
  var na = n%3;
  var listNa = [na];
  while(mok > 2) {
      na = mok%3;
      mok = change(mok/3);
      listNa.push(na);
  }
  if(change(mok) !== 0) {
      listNa.push(change(mok));
  }
  return listNa;
}

function change124(list) {
  var i = list.length-1;
  while(i >= 0) {
      if(list[i] === 0) {
          list[i+1] -= 1;
          list[i] += 3;
          i = list.length-1;
      }
      i -= 1;
  }
  if(list[list.length-1] === 0) {
      list.pop();
  }
  i = 0;
  while(i < list.length) {
      if(list[i] === 3) {
          list[i] = 4;
      }
      i += 1;
  }
  return list;
}
function change(n) {
  return Math.floor(n);
}



/*
function solution(n) {
    var answer = "";
    var stringAnswer = n.toString(3).split("").map(i=>parseInt(i,10));
    stringAnswer = change124(stringAnswer);
    var i = 0;
    while(i < stringAnswer.length) {
        answer += String(stringAnswer[i]);
        i += 1;
    }
    return answer;
}

function change124(list) {
    var i = 0;
    console.log(list);
    while(i <= list.length-1) {
        if(list[i] === 0) {
            list[i-1] -= 1;
            list[i] += 3;
            i = 0;
        }
        i += 1;
    }
    if(list[0] === 0) {
        list.shift();
    }
    i = 0;
    while(i < list.length) {
        if(list[i] === 3) {
            list[i] = 4;
        }
        i += 1;
    }
    return list;
}
function change(n) {
    return Math.floor(n);
}
*/