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
    console.log(lines);
    const [n, m] = getInt(lines[0]);
    const a = [];
    const b = [];
    const c = [];
    const d = [];

    for (let i=0; i<n; i++) {
      a.push(getInt(lines[i+1])[0]);
      b.push(getInt(lines[i+1])[1]);
    }

    const [k] = getInt(lines[m+1]);

    for (let i=0; i<k; i++) {
      c.push(getInt(lines[m+i+2])[0]);
      d.push(getInt(lines[m+i+2])[1]);
    }

    const plate = new Array(n).fill(false);
    const selects = new Array(k);

    
}

function search(k) {
  if (k===0) {
    return calcValue();
  } else {

  }
}

function calcValue() {

}