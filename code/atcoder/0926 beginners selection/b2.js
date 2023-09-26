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
    const [a] = getInt(lines[0]);
    const [b] = getInt(lines[1]);
    const [c] = getInt(lines[2]);
    const [x] = getInt(lines[3]);

    let count = 0;

    for (let i=0; i<=a; i++) {
        for (let j=0; j<=b; j++) {
            for (let k=0; k<=c; k++) {
                if (i*500 + j*100 + k*50 === x) {
                    // console.log(`500x${i}+100x${j}+50x${k}=${i*500 + j*100 + k*50}, ${x}`);
                    count++;
                }
            }
        }
    }
    console.log(count);
}