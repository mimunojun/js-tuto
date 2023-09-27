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
    const [h, w] = getInt(lines[0]);
    let result = (h*w)%2 === 0 ? ((h*w)/2) : ((h*w+1)/2)
    if (h===1 || w===1) result = 1;
    console.log(result);
}