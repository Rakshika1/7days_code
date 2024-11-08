const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let x=0 ,y =0,z=0;
let lineCount = 0;
rl.on("line",(line)=>{
    if(lineCount==0){
        n = parseInt(line);
    }
    else{
        const [xi,yi,zi] = line.split(" ").map(Number);
        x += xi;
        y += yi;
        z += zi;
    }
    lineCount++;

    if(lineCount==n+1){
        if(x==0 && y==0 && z==0){
            console.log("YES");
        }
        else{
            console.log("NO");
    }
    rl.close();
    }
})