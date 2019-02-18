
const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Lani',
        //     gender: 'Female',
        //     married: true,
        //     age: 35
        // });
        reject('Something went wrong!');
          }, 5000);

});

console.log('before');

promise.then((data) => {
    console.log('1',data);
}).catch((error) => {
console.log('error: ', error);
});


console.log('after');