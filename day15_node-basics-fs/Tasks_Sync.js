const fs = require("node:fs");
const filePath = "./Tasks.txt";

//sync
const file = fs.readFileSync(filePath);
let load = file.toString();
console.log("Before: \n", load);

const str = " Hello \n";

//rewrites the whole file
// fs.writeFileSync(filePath, str, "utf8");
// load = file.toString();

//adds to the existing data in file
fs.appendFileSync(filePath, str, "utf8");
load = file.toString();

console.log("After: \n", load);
