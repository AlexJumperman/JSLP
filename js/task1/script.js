let encryptionFunction = function(str){
    return str.split(" ").map((item) => {
        return (item.length % 3) > 0 ? 1 : 0;
    }).join('');
}

console.log(encryptionFunction("How are you?"));