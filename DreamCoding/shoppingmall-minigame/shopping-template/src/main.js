// JSON 파일로 부터 동적으로 items 를 가져옴
function loadItems() {

    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
    // fetch 쉬움 공부!
}
// items 를 가공해서 브라우저에 뿌려줌.
function displayItems(items) {
    // items 안에 있는 첫번째 요소를 container 에 담는다.
    const container = document.querySelector('.items');
    // container 에 받아온 items 를 map 형식으로 만들어서 뿌림?
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// HTML형식으로 item 들에 대한 값들을 넣어서 리턴함
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// main
// 아이템을 불러오는 함수 실행
loadItems()
    // items 가 담겨 오면
    // items 가 보여지는 함수를 실행하고
    // 이벤트가 실행 되서 원하는 items 를 보여지는 함수를 싱행.
    .then(items => {
        // console.log(items);
        displayItems(items);
        // setEventListeners(items)
    // reject 할 경우
    })
    .catch(console.log);

