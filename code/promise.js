const getWeather = () => {
    return new Promise((resolve, reject) => {
        let randomval = Math.random()
        setTimeout(() => {
            if (randomval < 0.3) {
                resolve('Sunny');
            } else if (randomval < 0.6 ) {
                resolve('Rainy');
            } else if (randomval < 0.9) {
                resolve('Cloudy');
            } else {
                reject('no data');
            }
        }, 500);
    })
}

const getWeatherIcon = (weather) => {
    return new Promise((resolve, reject) => {
        switch (weather) {
            case 'Sunny':
                resolve('🌞');
                break;
            case 'Rainy':
                resolve('☔️');
                break;
            case 'Cloudy':
                resolve('☁️');
                break;
            default:    // no case
                reject('no emoji');
                break;
        }
    }, 500);
}


const onSuccess = (data) => {
    console.log('Success!: ', data);
}

const onError = (error) => {
    console.log('Error: ', error);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError); // when getWeather returns error, the flow goes to onError, so getWeatherIcon will be skipped in that case

console.log('program booted');