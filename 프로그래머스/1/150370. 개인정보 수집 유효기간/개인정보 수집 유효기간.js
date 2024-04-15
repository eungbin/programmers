function solution(today, terms, privacies) {
    const answer = [];
    let objTerms = terms.reduce((acc, cur) =>  { return { ...acc, [cur.split(' ')[0]]: Number(cur.split(' ')[1]) } }, {});
    
    privacies.forEach((v, idx) => {
        const [date, type] = v.split(' ');
        let [yyyy, mm ,dd] = [Number(date.split('.')[0]), Number(date.split('.')[1]), Number(date.split('.')[2])];

        yyyy += ((mm+objTerms[type])%12 !== 0) ? Math.floor((mm+objTerms[type])/12) : Math.floor((mm+objTerms[type])/12)-1;
        mm = (mm+objTerms[type])%12 === 0 ? 12 : (mm+objTerms[type])%12;
        if(today >= yyyy+'.'+String(mm).padStart(2,'0')+'.'+String(dd).padStart(2,'0')) answer.push(idx+1);
    });
    
    return answer;
}