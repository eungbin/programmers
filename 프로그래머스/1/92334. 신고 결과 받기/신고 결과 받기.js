function solution(id_list, report, k) {
    let objPeople = {};
    let reported = [];

    id_list.forEach((v, idx) => { 
        objPeople[v] = idx;
        reported.push({ reportPeople:[], reportedNum:0 });
    });
    report.forEach(v => {
        const [reportPerson, reportedPerson] = v.split(' ');
        if(!reported[objPeople[reportedPerson]].reportPeople.includes(reportPerson)) {
            reported[objPeople[reportedPerson]].reportedNum += 1;
            reported[objPeople[reportedPerson]].reportPeople.push(reportPerson);
        }
    });
    
    return reported.reduce((acc, cur, idx) => {
        cur.reportPeople.forEach(v => cur.reportedNum >= k ? acc[objPeople[v]] += 1 : null);
        return acc;
    }, Array.from({length:id_list.length}, ()=>0));
}