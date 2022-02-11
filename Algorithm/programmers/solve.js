function solution(id_list, report, k, reportCount = {}, reportName = {}, reportK = [], answer = []) {

    // reportCount {신고당한놈 : 횟수} 정의.
    // reportName  {신고자 : 신고한놈} 정의
    // reportK [] k 이상 신고자
    let word = '';

    report.filter((val, idx) => {
        // 중복 제거
        return report.indexOf(val) === idx
    }).map((val) => {
        val.split(' ').forEach((val, idx) => {
            if (idx === 0) word = val;
            if (idx === 1) {
                reportCount[val] = (reportCount[val]) ? reportCount[val] + 1 : 1;
                reportName[word] += val;
            }
        })
    })

    // reportCount 돌면서 k 이상 신고 당한놈 꺼내.
    for (const key in reportCount) {
        if (reportCount[key] >= k) {
            // k 이상 신고를 어떤 놈이 했는 지 꺼내
            for (const nameKey in reportName) {
                if (reportName[nameKey].includes(key)) {
                    reportK.push(nameKey);
                }
            }
        }
    }

    for (let i = 0; i < id_list.length; i++) {
        answer.push(0);
        for (let j = 0; j < reportK.length; j++) {
            if (id_list[i] === reportK[j]) answer[i]++;
        }
    }
    return answer;
}


solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)