// solution 1
function solution(rank, attendance) {
    let answer = 0;
    let availableList = []; // 출석 가능한애들 담을 배열

    for(let i=0; i<rank.length; i++) { // 출석 가능한애들을 배열에 담아주는 반복문
        if(attendance[i]) availableList.push({rank: rank[i], index: i});
    }

    availableList.sort((a,b) => {
        if(a.rank < b.rank) return -1;
        if(a.rank > b.rank) return 1;
        return 0;
    })
    
    answer += availableList[0].index * 10000 +
              availableList[1].index * 100 +
              availableList[2].index;
    
    return answer;
}

// solution 2
