const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.srdout
});

let matrix = [];
let posx,posy;

rl.on('line',(line)=>{
    matrix.push(line.trim().split(' ').map(Number));

    if(matrix.length === 5){
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(matrix[i][j] === 1){
                    posx = i;
                    posy = j;
                }
            }
        }

    const moves = Math.abs(2-posx) + Math.abs(2-posy);
    console.log(moves);
    rl.close();
    }

})