

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
//one line input 

rl.question("Enter your Name: ",(input)=>{
    input+=" my day was Good";
    
    rl.close();
    console.log(input); 
})

//For multiple line input

rl.on('line',(line)=>{
    let limit = 5;
    limit--;
    
    console.log("Input parameter",line);
    if(limit===0){
        console.log("Limit Reached");
        rl.close();
    }
    console.log("remaining Limit:",limit);
})