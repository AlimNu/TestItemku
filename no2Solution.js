function solution(N, users) {
    const stages = [];
    let total = users.length

    for (let positionStage = 1; positionStage <= N; positionStage++) {
        const positionStages = users.filter(stage => stage === positionStage);
        const tempTotal = positionStages.length;
        stages.push({
            stage: positionStage,
            failureRate: tempTotal / total
        });

        total = total - tempTotal;
    }

    return stages.sort((left, right) =>
            left.failureRate === right.failureRate ? 0
                : left.failureRate > right.failureRate ? -1 : 1)
        .map(item => item.stage);
}

console.log(solution(4, [4, 4, 4, 4, 4]));