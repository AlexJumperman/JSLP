let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(conversion(i));
}

function conversion(number){
    let result = number % 5 === 0 ? 'Ping' : '';
    result = number % 7 === 0 ? result + 'Pong' : result;
    return result || number;
}

arr.map(element => console.log(element));
console.log(arr.join(''));