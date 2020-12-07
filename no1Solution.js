function solution(record){
    var answer = []
    dict1 = {}
    for (r of record){
        r_split = r.split(" ")
        if (r_split[0] === 'Enter' || r_split[0] === 'Change')
            dict1[r_split[1]] = r_split[2]
    }

    for (r of record){
        r_split = r.split(" ")
        if (r_split[0] === "Enter")
            answer.push(dict1[r_split[1]] + ' came in.')
        if (r_split[0] === "Leave")
            answer.push(dict1[r_split[1]] + ' has left.')
    }
    return answer
}
    


records = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

console.log(solution(records))