function solution(arr)
{
    return arr.filter((v, idx) => {
        if(idx !== 0) {
            if(v === arr[idx-1]) return false;
            else return true;
        }
        return true;
    });
}