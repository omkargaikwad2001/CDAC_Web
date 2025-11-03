const { version } = require("react");
const { execSync } = require("child_process");

console.log(`React version = ${version}`);
console.log(`Node version  = ${process.version}`);

const npmVersion = execSync("npm -v").toString().trim();
console.log(`npm version   = ${npmVersion}`);
