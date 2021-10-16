/*Question One */
class NotEqual extends Error{
    constructor(message){
        super(message);
    }
    get name(){
        return 'NotEqula';
    }
}

function equalValues(a,b){
    if(a == b){
        return 'True';
    }else{
        throw new NotEqual("Values are not equal");
    }
}
try{
const result = equalValues(4,4);
console.log(result);
}catch(err){
console.log(err);
}


/*  Question Two  */
console.log(__dirname);
console.log(__filename);


/*  Question Three  */
const { basename, extname } =require('path');

console.log('Basename Is: ',basename(__filename));
console.log('Extention Name is: ', extname(__filename));



/*  Question Four  */
const { readFileSync , writeFileSync } = require('fs');
const { join } = require('path');

const file = readFileSync(__filename);
console.log(file.toString());
 writeFileSync(join(__dirname,'output.txt'),file);


 /*  Question Five  */
 const os = new require('os');
 console.log('The Process ID : ',process.pid)
 console.log('The process uptime : ',process.uptime()) 
 console.log('The Operating System platform : ',os.platform())
 console.log('The OS free memory : ',os.freemem())
 console.log('The OS total memory : ',os.totalmem())