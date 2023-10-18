// 1st solution
function solution(name, yearning, photo) {
    let answer = [];
    
    for(let i=0; i<photo.length; i++) {
        let totalYearning = 0; // 현재 사진의 총 추억 점수
        for(let j=0; j<photo[i].length; j++) {
            let index = name.findIndex(e => e === photo[i][j]);
            let nowYearning = index !== -1 ? yearning[index] : 0; // 현재 사진의 (j+1)번째 인물의 추억점수
            totalYearning += nowYearning;
        }
        answer.push(totalYearning); // 현재 사진의 추억 점수 배열에 push
    }
    
    return answer;
}

// 2nd solution
function solution(name, yearning, photo) {
    // initial value를 주는 이유: 최초 콜백 호출 시 cur이 배열의 첫 번째 요소
    return photo.map((v) => v.reduce((acc, cur) => acc+(yearning[name.indexOf(cur)] ?? 0), 0));
}
