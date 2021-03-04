// JSON 파일로 부터 동적으로 items 를 가져옴
function loadItems() {

    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
    // fetch 쉬움 공부!
}

//
function displayItems(items) {
    const container = document.querySelector('.items');
    const html = items.map(item => createHTMLString(item)).join('');
    console.log(html);
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// main
loadItems()
    .then(items => {
        console.log(items);
        displayItems(items);
        // setEventListeners(items)
    })
    .catch(console.log);

