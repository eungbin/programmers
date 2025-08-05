function solution(s, n) {
    return s.split('').map(v => {
        if(v === ' ') return ' ';
        let code = v.charCodeAt();
        if(code >= 97 && code <= 122)
            return code+n > 122 ? String.fromCharCode(code+n-26) : String.fromCharCode(code+n);
        else
            return code+n > 90 ? String.fromCharCode(code+n-26) : String.fromCharCode(code+n);
    }).join('');
}