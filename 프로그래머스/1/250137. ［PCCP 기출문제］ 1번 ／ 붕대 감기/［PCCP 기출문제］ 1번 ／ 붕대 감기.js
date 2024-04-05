function solution(bandage, health, attacks) {
    let maxHealth = health;
    health -= attacks[0][1];
    if(health <= 0) return -1;

    for(let i=1; i<attacks.length; i++) {
        let healingTime = attacks[i][0] - attacks[i-1][0]-1;
        let healingNum = (healingTime * bandage[1]) + (parseInt(healingTime / bandage[0]) * bandage[2]);
        health = (health+healingNum > maxHealth ? maxHealth : health+healingNum);

        health -= attacks[i][1];
        if(health <= 0) return -1;
    }

    return health;
}
