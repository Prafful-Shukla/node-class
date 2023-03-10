//use for URL resolution and parsing.

//by default // hota hai url
//favicon?
//by default har ek url ka fevicon hota hai i.e logo of that particular url
//to check reason why not coming check network ctrlshifti

//var url=require("url");


const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
     res.write("kya mtlb me bhi  print nhi hopaonga")
     res.end("hello i am a response")
});

server.listen(1000,()=>{
    console.log("listening to port numbere 1000")
})


