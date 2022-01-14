// Output a prompt
process.stdout.write("prompt > ");
let pwd = require("./pwd");
let ls = require("./ls");
// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } 
  if (cmd === 'ls') {
      ls();
  }
  else {
    process.stdout.write("You typed: " + cmd); // remove the newline
  }
  process.stdout.write("\nprompt > ");
});
