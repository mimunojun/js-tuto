let a = [];
for(let i=0; i<100000; i++){
    const rd = Math.random();
    if(rd < 0.3) {
        a+='a'
    }else if (rd < 0.6) {
        a+='b'
    } else {
        a+='c'
    }
}

console.log(a)