const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = 'On time ' + data.forecast.observation_time + ' weather was ' +
                    data.forecast.weather_descriptions + '. Wind was comming from ' + data.forecast.wind_dir +
                    ' and speed was ' + data.forecast.wind_speed + ' Mile per hour.';
            }
        });
    });
});