const fs = require("node:fs");
const filePath = "./Tasks.txt";

console.log(`Process Started`);

fs.readFile(filePath, (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data.toString());
    console.log("Done Reading");
  }
});

const str = "Hello from Aync \n";
fs.appendFile(filePath, str, (err) => {
  if (err) throw err;
  console.log(`Done Uploading`);
});
