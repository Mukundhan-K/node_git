
const fs = require('fs').promises;
const path = require('path');

console.log("hi");

fs.readFile(path.resolve(__dirname,'files','starter.txt' ),'utf-8',(err,data)=>{
    if (err){
        throw err;
    } 
    console.log(data);    
});

fs.writeFile(path.join(__dirname,'files','reply.txt'),"\n vannakkam looser",{flag:'a'},(err,data)=>{
    if (err) {
        throw err;
    }
    console.log(data);
});

( async function(){
    try {
        const data =  await fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8');    
        await fs.appendFile(path.join(__dirname,'files','reply.txt'),"\n dei parama padi da");
        let newData = await fs.readFile(path.join(__dirname,'files','reply.txt'),'utf-8');
        console.log(newData); 

        f
    } catch (err) {
        console.error(`error occur ${err}`);
    }
})();

process.on('uncaughtException', err => {
    console.error(`uncaught error occur while running code ${err}`);
    process.exit(1);
});