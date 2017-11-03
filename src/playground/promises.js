const promise = new Promise((resolve, reject) => {
    // Do long async task in here.
    setTimeout(() => {
        resolve({
            name: 'Pablo',
            age: 29
        });
        // reject('Something went wrong!');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        // Do long async task in here.
        setTimeout(() => {
            resolve('This is my other promise');
        }, 3000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');
