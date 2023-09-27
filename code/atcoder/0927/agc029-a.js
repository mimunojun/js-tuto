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
    // console.log(lines);
    const [s] = lines[0];
    
    const sArray = [...s];
    const n = sArray.length;
    
    let count = 0;
    let blackCount = 0;

    for(let i=0; i<n; i++) {
        if(sArray[i] === 'B'){
            blackCount++;
        }
        if(sArray[i] === 'W') {
            count+=blackCount;
        }
    }

    console.log(count)
}