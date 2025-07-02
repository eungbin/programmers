function solution(n, w, num) {
    const floor = num%w === 0 ? Math.floor(num/w)-1 : Math.floor(num/w) // 박스가 몇 층에 있는지
    const indexInFloor = floor%2 === 0 ? (num-1)%w : w-1-((num-1)%w); // 박스가 해당 층 몇번째에 있는지
    const lastFloor = n%w === 0 ? Math.floor(n/w)-1 : Math.floor(n/w); // 마지막 층수
    const lastIndexInFloor = lastFloor%2 === 0 ? (n-1)%w : w-1-((n-1)%w); // 마지막 박스의 인덱스
    let answer = 1 + (lastFloor-floor-1); // 마지막 층을 제외한 floor~ 박스 개수

    if ( // 마지막층 해당 인덱스에 박스가 존재할 경우 +1, 아래 조건은 마지막 박스를 이용해 해당 인덱스에 박스가 있는지 판별
        (lastFloor % 2 === 0 && lastIndexInFloor >= indexInFloor) ||
        (lastFloor % 2 === 1 && lastIndexInFloor <= indexInFloor)
      ) {
        answer++;
      }

    return answer;
}