function solution(common) {
    let answer = common[1]-common[0] === common[2]-common[1] ? common[common.length-1]+common[1]-common[0] :
                                                               common[common.length-1]*common[1]/common[0];
    return answer;
}