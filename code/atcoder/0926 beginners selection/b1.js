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
    const a = getInt(lines[1]);

    let count = 0;
    let isAllEven = true;
    

    while(isAllEven){
        let i = 0;
        for (element of a) {
            if (element % 2 === 0) {
                a[i] = element / 2;
            } else {
                isAllEven = false;
            }
            i++;
        }
        if (isAllEven) {
            count++;
        }
    }

    console.log(count);
}