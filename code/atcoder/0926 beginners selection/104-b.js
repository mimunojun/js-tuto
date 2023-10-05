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
    const [a] = lines[0];
    const res = (check1(a) && check2(a) && check3(a)) ? 'AC' : 'WA'
    console.log(res)
    // console.log(check1(a))
    // console.log(check2(a))
    // console.log(check3(a))
    // console.log('A' < 'a')
    
}

function check1(str){
    return str[0]==='A';
}

function check2(str) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === 'C') count++;
    }

    if (count === 1) {
        for (let i=2; i<=str.length - 2; i++) {
            if (str[i] === 'C') return true;
        }
    }

    return false;
}

function check3(str) {
    for (let i=0; i<str.length; i++) {
        if(!(str[i]=='A' || str[i]=='C' || (str[i]>='a' && str[i]<='z' ))) {
            return false;
        } 
    }
    return true;
}