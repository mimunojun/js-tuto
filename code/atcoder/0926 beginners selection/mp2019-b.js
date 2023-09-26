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

    const [n] = getInt(lines[0]);

    const start = Math.floor(n/1.08)
    let result = ':('
    for (let i=start; i<start+2; i++) {
        if (Math.floor(i*1.08) === n) {
            result = i;
        }
    }
    console.log(result)
}