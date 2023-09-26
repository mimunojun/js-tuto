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
    const x = getInt(lines[1]);

    let minsum = 999999999;

    for (let i=1; i<=100; i++) {
        let sum = 0;
        for (let j=0; j<n; j++) {
            // console.log(`i:${i}, x[${j}]`)
            sum += ((x[j] - i)**2);
            
        }
        // console.log(sum)
        if (sum < minsum) {
            minsum = sum;
        }
    }

    console.log(minsum)
}