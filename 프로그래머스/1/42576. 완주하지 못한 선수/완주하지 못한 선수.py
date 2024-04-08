def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()

    part_len = participant.__len__()

    for i in range(completion.__len__()):
        if participant[i] != completion[i]:
            answer = participant[i]
            break

    if answer == '':
        answer = participant[part_len-1]

    return answer