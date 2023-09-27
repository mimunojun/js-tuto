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
    const [a, b] = [(lines[0][0]),(lines[0][1])];
    const concated = a+b;

    const sqrted = Math.sqrt(parseInt(concated));
    // console.log(Math.sqrt(parseInt(concated)), Math.floor(sqrted));
    
    if (sqrted === Math.floor(sqrted)) {
        console.log('Yes');
    } else {
        console.log('No')
    }
}