const fs = require('fs');
const os = require('os');

/*  Q.2  In the same project directory created in the above assignment, your task is to create a new file index&js and 
using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below 
are the expected files in the project folder */
const content = "Node.js is a plaform that utilizes Javascript and is primarily employed for developing web applications that are highly focused on input or output operations, including but not limited to chat applications and multimedia streaming websites."

// writing the file
 fs.writeFile('nodejs_architecture.txt',content,(err)=>{
    if(err)
    {
        console.log('Error is writing in file');
    }
    else{
        console.log("Successfully");
    }
}) 

// Q.3
// reading the data from file nodejs_architecture
fs.readFile('nodejs_architecture.txt',(err,data)=>{
    if(err)
    {
        console.log('error in reading file',err);
    }
    else{
        console.log('reading successfully');
        console.log(data.toString());
    }

}) 


// appending and reading data from file
 const append_data = "First of all, Node.js is a lightweight runtime. It uses an asynchronous, 
     event-driven I/O model which ensures that almost no function in Node.js directly performs I/O. This time-saving operation 
     cuts down the time developers spend on deploying an application.Node.js offers both client-side and server-side in JavaScript. It means that applications written in Node.js require fewer files and less code as developers can reuse it for the frontend and backend parts of an application. As a result, your development team delivers faster results and you can cut down on personnel hours by hiring a team of full-stack developers — instead of separately bringing on a frontend and backend developer(s).The fact that Node.js is powered by the V8 engine by Google Chrome is beneficial itself. It compiles JavaScript to machine code before executing it which results in faster development. Google makes significant investments in the V8 engine improving its efficiency and security, which is why developers have more chances to deploy stable and high-performance applications."

fs.appendFile('nodejs_architecture.txt',append_data,(err)=>{
    if(err)
    {
        console.log('error in writing file',err);
    }
    else{
        console.log('data append successfully and after append the data',fs.readFile('nodejs_architecture.txt',function(err,data){
            if(err)
    {
        console.log('error in reading file',err);
    }
    else{
        console.log('reading successfully');
        console.log(data.toString());
    }
        }));
        
        
    } 
})

// delete the file
 fs.unlink('nodejs_architecture.txt', (err)=>{
    if(err)
    {
        console.log('error in deleting file');

    }
    else{
        console.log('file deleted successfully');
    }
}) 

// print the os name
 console.log("Operating System Name:"+os.hostname());

// print the os-release

 console.log("OS release:" +os.release());

// create HTTP server

const http = require('http');


const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
    }
    res.end();
})
server.listen(5000);
console.log('the http server is running in port 5000'); 

// emit: is used to trigger an event
// on: is used to add a callback function that's going to be executed when the event is triggered
const EventEmitter = require('events');
console.log("event start");
const eventEmitter = new EventEmitter();
eventEmitter.on('subscribe',(str)=>{
    console.log(`Thanks For Subscribing to ${str}`);
    console.log('even handle');
})
eventEmitter.emit('subscribe','Collage Wallah');
console.log('event end');

// print max Listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log("The default maximum of event listners are:"+currentMaxListeners);

// print  updated max listeners
eventEmitter.setMaxListeners(5);

const updateMaxListeners = eventEmitter.getMaxListeners();
console.log("The updated maximum of event listners are:"+updateMaxListeners);
