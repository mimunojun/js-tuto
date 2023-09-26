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

    const [n, a, b] = getInt(lines[0]);
    const [s] = (lines[1]);

    let passed = 0;
    let rankofB = 0;
    

    for (let i=0; i<n; i++) {
        let result = 'No';
        if (s[i] === 'b') {
            rankofB++;
            if(rankofB <= b && passed < a+b) {
                result = 'Yes';
                passed++;
            }
        }

        if (s[i] === 'a') {
            if (passed < a+b) {
                result = 'Yes';
                passed++;
            }
            
        }
        console.log(result)
        
    }
}

function howManyB(str, index) {
    let count = 0;
    for(let i=0; i<=index; i++) {
        if (str[i] === 'b') {
            count++
        }
    }
    return count;
}