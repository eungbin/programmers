function solution(h1, m1, s1, h2, m2, s2) {
    let answer = getCount(h2, m2, s2) - getCount(h1, m1, s1);
    if((h1===0 || h1===12) && m1===0 && s1===0) answer +=1
    
    return answer;
}

const getCount = (h, m, s) => {
    let answer = -1; // 0시 0분 0초~ 0시 1분 0초는 분에 1회 만나기에 -1 시작
    const digree = { h: (h*30+0.5*m+s/120)%360, m: m*6+0.1*s, s: s*6 };
    
    answer += (h*60+m)*2; // 분당 2회 만남
    answer -= h; // 59분 -> 0분 예외처리 ('12'에서 모두 한꺼번에 만나기에 1번만 만남 고로 시간만큼 1빼줌)
    
    if(digree.h <= digree.s) answer++; // 마지막 바퀴 h시 m분 0초 ~ h시 m분 s초
    if(digree.m <= digree.s) answer++; // 마지막 바퀴 h시 m분 0초 ~ h시 m분 s초
    
    if(h >= 12) answer -= 2;
    
    return answer;
}