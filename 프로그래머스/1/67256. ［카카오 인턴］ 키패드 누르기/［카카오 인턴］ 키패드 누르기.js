function solution(numbers, hand) {
    var answer = '';
    var numbersPosition = [[3,1], [0,0], [0,1], [0,2],
                          [1,0], [1,1], [1,2],
                          [2,0], [2,1], [2,2]]
    var leftR = 3;
    var leftC = 0;
    var rightR = 3;
    var rightC = 2;
    var leftDistance = 0;
    var rightDistance = 0;
    
    for(var i=0; i<numbers.length; i++) {
        var num = numbers[i];
        
        if(num === 1 || num === 4 || num === 7) {
            leftR = numbersPosition[num][0];
            leftC = numbersPosition[num][1];
            answer += "L";
            continue;
        } else if(num === 3 || num === 6 || num === 9) {
            rightR = numbersPosition[num][0];
            rightC = numbersPosition[num][1];
            answer += "R";
            continue;
        }
        
        leftDistance = calDistance(leftR, leftC, num, numbersPosition);
        rightDistance = calDistance(rightR, rightC, num, numbersPosition);
        
        if(leftDistance === rightDistance) {
            if(hand === "left") {
                leftR = numbersPosition[num][0];
                leftC = numbersPosition[num][1];
                answer += "L";
            } else {
                rightR = numbersPosition[num][0];
                rightC = numbersPosition[num][1];
                answer += "R";
            }
        } else if(leftDistance < rightDistance) {
            leftR = numbersPosition[num][0];
            leftC = numbersPosition[num][1];
            answer += "L";
        } else {
            rightR = numbersPosition[num][0];
            rightC = numbersPosition[num][1];
            answer += "R";
        }
    }
    return answer;
}

function calDistance(r, c, number, posList) {
    var posR = posList[number][0];
    var posC = posList[number][1];
    return (Math.abs(r-posR) + Math.abs(c-posC));
}