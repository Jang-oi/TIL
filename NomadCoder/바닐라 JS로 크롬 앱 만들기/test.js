// 버튼마다 밸류값을 가져와서 그 값에 대해 해결함 btn() 하나로 해결
const btn = document.getElementsByTagName("button");
const result_value = document.querySelector("#result_value");
let value = 0;

function btnFn() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            console.log(btn[i].textContent);
        })
    }
}

function init() {
    btnFn();
}

init();