function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    timelogs.forEach((v, idx) => {
        const scheduleHour = Math.floor(schedules[idx] / 100);
        const scheduleMin = schedules[idx] % 100;
        let latestHour = scheduleHour;
        let latestMin = scheduleMin + 10;

        if (latestMin >= 60) {
            latestHour += 1;
            latestMin -= 60;
        }
        const latestTime = latestHour * 100 + latestMin;
        
        let count = v.reduce((acc, cur) => {
            if(startday%7 === 0 || startday%7 === 6) {  }
            else if(latestTime >= cur) { acc += 1; }
            startday++;
            return acc;
        }, 0);
        
        if(count >= 5) answer++;
    });
    
    return answer;
}