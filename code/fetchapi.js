const getStation = () => {
    return new Promise((resolve, reject)=> {
        fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[0])) // weather soon after
    })
}

const onSuccess = (data) => {
    console.log('Short Forecast: ', data.shortForecast);
    console.log('Detailed Forecast: ', data.detailedForecast);
}

getStation().then(onSuccess)

const getting = getStation();