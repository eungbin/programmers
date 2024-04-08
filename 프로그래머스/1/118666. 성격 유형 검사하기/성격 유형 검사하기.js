function solution(survey, choices) {
    let answer = '';
    let dicType = { 'RT': 0, 'CF': 0, 'JM': 0, 'AN': 0 };
    let answerType = { 1: 3, 2: 2, 3: 1, 4: 0, 5: -1, 6: -2, 7: -3 };
    
    for(let i=0; i<survey.length; i++) {
        if(Object.keys(dicType).includes(survey[i])) {
            dicType[survey[i]] += answerType[choices[i]];
        } else {
            dicType[survey[i].split('').reverse().join('')] += answerType[choices[i]] * -1;
        }
    }
    
    for(let key of Object.keys(dicType)) {
        answer += dicType[key] > 0 ? key[0] : 
                  dicType[key] < 0 ? key[1] : 
                  key[0] < key[1] ? key[0] : key[1];
    }
    
    return answer;
}