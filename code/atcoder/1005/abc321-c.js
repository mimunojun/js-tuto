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
    const [k] = getInt(lines[0]);
    let result = [];
    
    for (let i=0; i< 1<<10; i++) {
        let x = 0;
        for (let j=9; j>=0; j--) {
            if (i>>j&1) {
                x = x*10 + j;
            }
        }
        if (x==0) continue;
        result.push(x);
    }
    result = result.sort((a,b)=>{
        return a>b ? 1:-1;
    });
    console.log(result[k-1]);
}

function is321Num(num) {
    const strNum = num.toString();
    
    for (let i=0; i<strNum.length-1; i++) {
        if (strNum[i] <= strNum[i+1]) {
            return false;
        }
    }
    return true;
}