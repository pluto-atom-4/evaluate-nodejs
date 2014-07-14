var exec = require('child_process').exec;

var child = exec('pwd -P', function(err, stdout, stderr) {
  if (!err) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr)
  } else {
    console.log(err);
    // err.code will be the exit code of the child process
    console.log(err.code);
    // err.signal will be set to the signal that terminated the process
    console.log(err.signal);
  }
})