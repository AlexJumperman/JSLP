const sum = function(x, y, callback){
    setTimeout(() =>{
        const res = x + y;
        callback(res);
    }, 3000)
}

sum(1, 4, (sum) => {
    console.log(sum)
});