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

    const [n, m, c] = getInt(lines[0]);
    const b = getInt(lines[1]);
    const a = [];
    for (let i=0; i<n; i++) {
        a[i] = getInt(lines[i+2]);
    }

    let count = 0;

    for (let i=0; i<n; i++) {
        let smallSum = 0;
        for (let j=0; j<m; j++) {
            smallSum += a[i][j] * b[j];
            // console.log(`a[${i}][${j}]*b[${j}]=${a[i][j]}*${b[j]}=${a[i][j]*b[j]}`);
        }
        // console.log(`smallSum+C=${smallSum+c}`);
        if (smallSum+c > 0) {
            count++;
        }
    }
    console.log(count)
}