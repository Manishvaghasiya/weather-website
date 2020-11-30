const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5f894070711f3a9edcd8d0cde0cfb572&query=' + latitude + ',' + longitude + '&units=f';
    request({
        url,
        json: true
    }, (error, {
        body
    } = {}) => {
        if (error) {
            callback('Unable to connect with weather forecast', undefined);
        } else if (body.error) {
            callback('Unable to find weather forecst for given address', undefined);
        } else {
            callback(undefined, body.current);
        }
    });
};

module.exports = {
    forecast: forecast
};