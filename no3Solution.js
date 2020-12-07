function solution(relation) {
    let answer = 0;
    const firstRelationLength = relation[0].length;
    let candidates = [];

    // Find one best candidate first
    for (let i = 0; i < firstRelationLength - 1; i++) {
        const oneRows = relation.map(rel => rel[i]);
        const isDuplicatedCol = new Set(oneRows).size !== oneRows.length;

        if (!isDuplicatedCol) {
            candidates.push(i);
            answer++;
        }
    }

    for (let i = 0; i < firstRelationLength - 1; i++) {
        for (let j = 0; j < firstRelationLength - 1; j++) {
            const currentCandidate = candidates.findIndex(el => el === i) > -1;
            const nextCandidate = candidates.findIndex(el => el === j) > -1;
            if (!currentCandidate && !nextCandidate && i !== j) {
                const oneRows = relation.map(rel => `${rel[i]} ${rel[j]}`);
                const duplicatedCol = new Set(oneRows).size !== oneRows.length;

                if (!duplicatedCol) {
                    candidates.push(i);
                    candidates.push(j);
                    answer++;
                }
            }
        }
    }

    return answer;
}

console.log(solution([['100', 'ryan', 'music', '2'], ['200', 'apeach', 'math', '2'], ['300', 'tube', 'computer', '3'], ['400', 'con', 'computer', '4'], ['500', 'muzi', 'music', '3'], ['600', 'apeach', 'music', '2']]))