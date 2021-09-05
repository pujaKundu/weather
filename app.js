const API_KEY = 'c862b1bec09836c1b2bafce5470c9055';

const loadData = () => {
    const searchField = document.getElementById('search-feild');
    const searchValue = searchField.value;

    searchField.value = '';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;
    fetch(API)
        .then(res => res.json())
        .then(data => displayData(data));
};
const searchBtn = document.getElementById('button-search');
searchBtn.addEventListener('click', loadData);
const updateText = (id, text) => {
    const textContainer = document.getElementById(id);
    textContainer.innerText = text;
};

const displayData = (data) => {
    updateText('city-name', data.name);
    updateText('temparature', data.main.temp + '°C');
    updateText('feels-like', 'Feels like ' + data.main.feels_like + '°C');
    updateText('condition', data.weather[0].main);
    const weatherIcon = document.getElementById('weather-icon');
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    const resultsContainer = document.getElementById('results');
    resultsContainer.classList.add('results');
}