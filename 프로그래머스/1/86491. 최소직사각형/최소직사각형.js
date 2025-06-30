function solution(sizes) {
    return sizes
            .map((v) => [Math.max(...v), Math.min(...v)])
            .reduce(([maxW, maxH], [w, h]) => [Math.max(maxW, w), Math.max(maxH, h)], [0, 0])
            .reduce((a, b) => a * b);
}