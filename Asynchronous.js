//in asynchronous it is mot mandotory to 

//callback function will be used for asyn.

const fs=require("fs");
fs.writeFile("fs.text","i am the orginal data",(err)=>{
    console.log('file is created');
    console.log(err);
})