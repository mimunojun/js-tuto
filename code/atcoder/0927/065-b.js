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
    const [n] = getInt(lines[0]);
    const a = [];
    for (let i=0; i<n; i++) {
        a.push(getInt(lines[i+1])[0]);
    }
    
    let result = -1;
    let nowButton = 1;

    for (let i=0; i<n; i++) {
        // console.log(`nowButton: ${nowButton}`);
        nowButton = a[nowButton-1];
        // console.log(`moveto: ${nowButton}`);
        if (nowButton === 2) {
            result = i + 1;        
            break;
        }
    }

    console.log(result)
}