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
    const [k] = getInt(lines[0]);
    const [a,b] = getInt(lines[1]);

    let result = 'NG';

    for (let i=a; i<=b; i++) {
        if (i%k === 0) {
            result = 'OK'
        }
    }
    console.log(result);
}