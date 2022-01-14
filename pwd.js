module.exports = function pwd() {
  const cwd = process.cwd();
  process.stdout.write(cwd);
}
