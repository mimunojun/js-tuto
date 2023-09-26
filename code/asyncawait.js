const getResult = () => {
    let randomval = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomval < 0.4) {
                resolve('passed');
            } else if (randomval < 0.8) {
                resolve('not passed');
            } else {
                reject('failed getting data!');
            }
        },500);

    });
};

const onSuccess = (result) => {
    console.log('Successed!', result);
}

const onFailure = (error) => {
    console.log('Error!', error);
}

const start = async () => {
    try {
        let result = await getResult();
        onSuccess(result);
    } catch(error) {
        onFailure(error);
    }

};

start();

const asyncies = async () => {
    return 'hi';
};

console.log(asyncies());