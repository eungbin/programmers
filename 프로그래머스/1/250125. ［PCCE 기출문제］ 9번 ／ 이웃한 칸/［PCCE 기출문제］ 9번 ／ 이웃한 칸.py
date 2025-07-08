def solution(board, h, w):
    answer = 0
    target = board[h][w]
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    for dh, dw in directions:
        nh, nw = h + dh, w + dw
        if 0 <= nh < len(board) and 0 <= nw < len(board[0]):
            if board[nh][nw] == target:
                answer += 1
    
    return answer