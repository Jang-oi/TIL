function solution(id_list, report, k) {

    const answer = [];
    const reportCount = {};

    // {[신고자 : [신고받은사람1, 신고받은사람2]], [신고자 : [신고받은사람1, 신고받은사람2]]}
    // 위와 같은 구조로 만들어서 {} 인덱스는 id_list 고 신고받은사람 1,2,3 을 넣어서 리턴해주면 될듯..
    const reportObject = {};
    id_list.map(val => {
        reportObject[val] = [];
    })

    report.filter((val, idx) => {
        // 중복 제거
        return report.indexOf(val) === idx
    }).map(val => {
        // reportUser 신고 한 사람
        // reportName 신고 받은 사람
        const [reportUser, reportName] = val.split(' ');
        reportCount[reportName] = (reportCount[reportName]) ? reportCount[reportName] + 1 : 1;
        reportObject[reportUser].push(reportName);
    })

    console.log(reportObject)

    // reportCount 돌면서 k 이상 신고 당한놈 꺼내.
    for (const key in reportCount) {
        if (reportCount[key] >= k) {
            // k 이상 신고를 어떤 놈이 했는 지 꺼내
            for (const reportKey in reportObject) {
                if (reportObject[reportKey].includes(key)) {
                    console.log(reportKey)
                }
            }
        }
    }
    return answer;

}


solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)