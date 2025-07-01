function solution(s){
    let answer = s.toLowerCase().split('').reduce((acc, char) => {
        if(char === 'p') acc[0] += 1;
        else if(char === 'y') acc[1] += 1;
        return acc;
    }, [0, 0]);

    return answer[0] === answer[1];
}