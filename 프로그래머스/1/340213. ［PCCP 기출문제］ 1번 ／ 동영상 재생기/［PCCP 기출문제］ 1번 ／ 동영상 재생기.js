function solution(video_len, pos, op_start, op_end, commands) {
    const convertVideoLen = _convertTime(video_len);
    let convertPos = _convertTime(pos);
    const convertOpTime = [_convertTime(op_start), _convertTime(op_end)];
    
    commands.forEach(command => {
        convertPos = _opSkip(convertPos, convertOpTime);
        convertPos = _runCommand(convertPos, command, convertVideoLen);
        convertPos = _opSkip(convertPos, convertOpTime);
    });
    
    return String(Math.floor(convertPos / 60)).padStart(2, '0') + ':' +
           String(Math.floor(convertPos % 60)).padStart(2, '0');
}

const _convertTime = (stringTime) => {
    return parseInt(stringTime.split(':')[0])*60 + parseInt(stringTime.split(':')[1]);
}

const _opSkip = (pos, opTime) => {
    return (pos >= opTime[0] && pos <= opTime[1]) ? opTime[1] : pos;
}

const _runCommand = (pos, command, video_len) => {
    if(command === 'next') {
        return pos+10 > video_len ? video_len : pos+10;
    } else if(command === 'prev') {
        return pos-10 < 0 ? 0 : pos-10; 
    }
    return 'err';
}