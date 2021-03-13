const select = document.querySelector("select"),
    options = document.querySelectorAll("option");

const USER_COUNTRY = "country";

function saveCountry(text) {
    localStorage.setItem(USER_COUNTRY, text);
}

function handleSubmit() {
    const countryValue = select.value;
    saveCountry(countryValue);
}

function selectPick() {
    select.addEventListener('change', handleSubmit);
}

function optionDefault() {
    const country = localStorage.getItem(USER_COUNTRY);

    for (let i in options) {
        if(options[i].value === country ) {
            options[i].selected = true;
        }
    }
}

function loadCountry() {
    selectPick();

    const country = localStorage.getItem(USER_COUNTRY);

    if (country === null) {
        options[0].selected = true;
    } else {
        optionDefault();
    }
}

function init() {
    loadCountry();
}

init();