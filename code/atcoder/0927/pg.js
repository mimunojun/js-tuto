let result = '';
for (let i=0; i<200000; i++) {
    const rnd = Math.random();
    if(rnd > 0.5) {
        result += 'B';
    } else {
        result += 'W';
    }
}
console.log(result)