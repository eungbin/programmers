function solution(targets) {
    var answer = 1;
    
    const sortedTargets = targets.sort(function(a, b) {
        return a[1]-b[1];
    });
    
    let shootPosition = sortedTargets[0];
                                       
    sortedTargets.forEach(v => {
        if(v[0] >= shootPosition[1]) {
            shootPosition = v;
            answer += 1;
        }
    });
    
    return answer;
}
