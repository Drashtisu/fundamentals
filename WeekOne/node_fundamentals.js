


// module


const  fs= require('fs')

fs.writeFileSync('demo.txt', 'Hello Node.js');


// cmd lines for  the  node js
// node app.js
// node --watch app.js
// node -e "console.log('Hello')"
// node --inspect app.js
// node --run start


// Output to the command line using Node.js
const x = 1;
const y = 2;
const z = 3;
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
);

console.log("Hello");

const repl = require("node:repl");

const local = repl.start("MyApp > ");

local.on("exit", () => {
  console.log("Good Bye");
  process.exit();
});


const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
  console.count(fruit);
});
apples.forEach(fruit => {
  console.count(fruit);
});




const function2 = () => console.trace();

const function1 = () => function2();

function1();

// Accept input from the command line in Node.js
console.log(process.argv);


// Taking Input While Program is Running  Using the built-in readline module.


const readline  =require('readline');

const rl = readline.createInterface({

  input:process.stdin,
  output :process.stdout,
})


rl.question("how are you ", (name)=>{
  console.log("hello",(name))
  rl.close();
})



//learn  How to read environment variables from Node.js

console.log(process.env.NAME);


const port = process.env.PORT;

console.log(port);





const http =require('http');


http.createServer((req,res)=>{
res.write("<h1>HeLLO this is  basic  server</h1>");
}).listen(4000);