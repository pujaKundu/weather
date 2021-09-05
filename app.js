const API_KEY = 'c862b1bec09836c1b2bafce5470c9055';

const loadData = () => {
    const searchField = document.getElementById('search-feild');
    const searchValue = searchField.value;
    console.log(searchValue);
    searchField.value = '';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;
    fetch(API)
        .then(res => res.json())
        .then(data => console.log(data));
};
const searchBtn = document.getElementById('button-search');
searchBtn.addEventListener('click', loadData);
const updateText = (id, text) => {
    const textContainer = document.getElementById(id);
    textContainer.innerText = text;
};

const displayData = (data) => {
    updateText('city-name', `${data.name}`)
}