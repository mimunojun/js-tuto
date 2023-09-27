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
    let a = [];
    a[0] = getInt(lines[0]);
    a[1] = getInt(lines[1]);
    a[2] = getInt(lines[2]);
    [n] = getInt(lines[3]);
    let b = [];
    for (let i=0; i<n; i++) {
        b.push(getInt(lines[i+4])[0]);
    }
    let punched = new Array(3);

    for (let i=0; i<3; i++) {
        punched[i] = new Array(3).fill(false);
        for (let j=0; j<3; j++) {
            for (let k=0; k<n; k++) {
                if (a[i][j]===b[k]) {
                    punched[i][j] = true;
                }
            }
        }
    }
    // console.log(punched)
    // console.log(`hor:${horBingo(punched)}`)
    // console.log(`vert:${vertBingo(punched)}`)
    // console.log(`cross:${crossBingo(punched)}`)
    const result = (horBingo(punched) || vertBingo(punched) || crossBingo(punched)) ? 'Yes' : 'No';
    console.log(result)
}

function horBingo(p) {
    for (let i=0; i<3; i++) {
        if (p[i][0] && p[i][1] && p[i][2]) {
            return true;
        }
    }
    return false;
}

function vertBingo(p) {
    for (let i=0; i<3; i++) {
        if (p[0][i] && p[1][i] && p[2][i]) {
            return true;
        }
    }
    return false;
}

function crossBingo(p) {
    if (p[0][0] && p[1][1] && p[2][2]) {
        return true;
    }
    if (p[0][2] && p[1][1] && p[2][0]) {
        return true;
    }
    return false;
}