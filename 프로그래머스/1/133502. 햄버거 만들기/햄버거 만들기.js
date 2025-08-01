function solution(ingredient) {
    let count = 0;
    const stack = [];
    const target = [1, 2, 3, 1];
    const targetLen = target.length;
    
    for(let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= targetLen) {
            const stackLen = stack.length;
            if(target.every((v,idx) => v === stack[stackLen-(targetLen-idx)])) {
                stack.splice(stackLen-targetLen, targetLen);
                count++;
            }
        }
    }
    
    return count;
}