const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var tClosest;
var tPos;
var tTemp;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if (i === 0) {
        tTemp = t;
        }

    if (t < 0 && t > tTemp || t > 0 && t < tTemp) {
        tTemp = t;
        } else if (t === 0) {
        tTemp = 0;
        } else if (t === -tTemp && t < 0){
        tTemp = -t;
        } else if (t === -tTemp && t > 0){
        tTemp = t;
        }
    
}

if (tTemp) {
    console.log(tTemp)
    } else {
        console.log(0)
        }
