function solution(s, skip, index) {
    const skipNumList = skip.split('').map(v => v.charCodeAt(0));
    
    return s.split('').map(v => getChangedChar(v, index, skipNumList)).join('');
}

function getChangedChar(char, index, skipList) {
    let charNum = char.charCodeAt(0);
    
    while(index !== 0) {
        charNum++;
        if(charNum > 122) charNum = 97;
        skipList.includes(charNum) ? null : index--;
    }
    
    return String.fromCharCode(charNum);
}