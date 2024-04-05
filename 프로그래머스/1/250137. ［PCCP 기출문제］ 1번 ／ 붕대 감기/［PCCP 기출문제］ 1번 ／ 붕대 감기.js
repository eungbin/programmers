function solution(bandage, health, attacks) {
    const [useTime,hpPerSec,additional_hp,max_health] = [bandage[0],bandage[1],bandage[2],health]
    let left_time, add_heal, heal,left_bandage_time,temp
    if(attacks.length == 1){
        return (health-attacks[0][1])<=0?-1:health-attacks[0][1]
    }

    for(let i=0; i<attacks.length-1; i++){
        health-=attacks[i][1]  // 피 = 원래있던피 - 이번 공격
        if(health<=0) return -1 //죽은 지 확인
        left_time = attacks[i+1][0]-(attacks[i][0]+1)
        
        if(left_time<1) continue //남은 시간이 없으면 바로 다음 공격 맞으러 감
        
        if(left_time>=useTime){ //남은 시간이 시전 시간보다 길면 보너스
            temp = parseInt(left_time/useTime)
            heal = (temp*additional_hp) + (hpPerSec*left_time)
        }else{
             heal = left_time*hpPerSec
        }
        health+=heal
        if(health>max_health) health = max_health
    }
    health -=attacks[attacks.length-1][1]
    return health<=0? -1:health
}