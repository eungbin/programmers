function solution(todo_list, finished) {
    return todo_list.filter((task, idx) => !finished[idx]);
}