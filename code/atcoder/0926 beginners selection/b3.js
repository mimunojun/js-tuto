var inputs = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
var lines = [];
for(x of inputs){
  lines.push(x.split(" "));
}
main();

function getInt(strArr){
  var rtn = [];
  for(elem of strArr)rtn.push(parseInt(elem));
  return rtn;
}

function getFloat(strArr){
  var rtn = [];
  for(elem of strArr)rtn.push(parseFloat(elem));
  return rtn;
}

function main() {
    console.log(lines);
    const [n, a, b] = getInt(lines[0]);
    let res = 0;
    for(let i=1; i<=n; i++) {
        const p = Math.floor(i / 1000);
        const q = Math.floor((i / 100))%10;
        const r = Math.floor((i / 10))%10;
        const s = Math.floor((i / 1))%10;
        let sum = calc(p,q,r,s); 
        if (sum >= a && sum <= b) {
            res += i;
        }
    }
    console.log(res)
    
}

function calc(i, j, k, l) {
    return i+j+k+l;
}