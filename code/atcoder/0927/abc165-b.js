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
    const [x] = getInt(lines[0]);

    let count = 0;
    let nowCurrency = BigInt(100);
    while(true) {
        // console.log(nowCurrency)
        nowCurrency += (nowCurrency / BigInt(100));
        count++;

        if(nowCurrency >= x) { break; }

    }

    console.log(count);
}