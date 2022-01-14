// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  // process.stdout.write("You typed: " + cmd); // remove the newline
  // process.stdout.write("\nprompt > ");

  // *** Mimicking 'pwd' functionality
  if (cmd === "pwd") {
    const cwd = process.cwd();
    process.stdout.write(cwd);
  }
});
