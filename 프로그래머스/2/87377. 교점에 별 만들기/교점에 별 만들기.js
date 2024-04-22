function solution(line) {
    let answer = [];
    let stars = [];
    
    for(let i=0; i<line.length-1; i++)
        for(let j=i+1; j<line.length; j++)
            getStar(line[i], line[j]).length > 1 ? stars.push(getStar(line[i], line[j])) : null;
    
    return drawStar(stars);
}

const getStar = (line1, line2) => {
    let [A, B, E] = [line1[0], line1[1], line1[2]];
    let [C, D, F] = [line2[0], line2[1], line2[2]];
    
    let [x,y] = [((B*F)-(E*D)) / ((A*D)-(B*C)),((E*C)-(A*F)) / ((A*D)-(B*C))];
    return Number.isInteger(x) && Number.isInteger(y) ? [x, y] : [0];
}

const drawStar = (stars) => {
    let answer = [];
    
    stars.sort((a, b) => {
        if(a[1] > b[1]) return -1;
        else if(a[1] < b[1]) return 1;
        else {
            if(a[0] > b[0]) return 1;
            else return -1;
        }
    });
    
    let [minX, maxX] = [stars[0][0], stars[0][0]];
    stars.forEach(v => {
        minX > v[0] ? minX = v[0] : null;
        maxX < v[0] ? maxX = v[0] : null;
    })

    for(let i=stars[0][1]; i>=stars[stars.length-1][1]; i--) {
        let answerString = '';
        for(let j=minX; j<=maxX; j++) {
            stars.findIndex(star => star[0] === j && star[1] === i) !== -1 ? answerString += '*' : answerString += '.';
        }
        answer.push(answerString);
    }
    return answer;
}