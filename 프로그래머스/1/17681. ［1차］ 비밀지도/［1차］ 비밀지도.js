function solution(n, arr1, arr2) {
    let answer = [];
    for(let i=0; i<n; i++) {
        answer.push(_decodeBinary(_combineBinary(_decimalToBinary(arr1[i], n),_decimalToBinary(arr2[i], n))));
    }
    return answer;
}

const _decimalToBinary = (decimal, n) => { return decimal.toString(2).padStart(n, '0') }
const _combineBinary = (bin1, bin2) => {
    return bin1.split('').map((v, idx) => (Number(v) || Number(bin2.split('')[idx])).toString()).join('');
}
const _decodeBinary = (bin) => {
    return bin.split('').map(v => v === '1' ? '#' : ' ').join('');
}