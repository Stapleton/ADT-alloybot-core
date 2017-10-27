const chalk = require('chalk');
let tracer = require('tracer');

tracer.colorConsole({ trace: chalk.cyan, debug: chalk.blue, info: chalk.grey, warn: chalk.yellow, error: chalk.red });
tracer.console({
  format: [
    "[{{title}} | {{timestamp}}] {{message}}",
    {
      error: "[{{title}} | {{timestamp}}] {{message}} || in {{file}}:{{line}}\nCall Stack:\n{{stack}}"
    }
  ],
  dateformat: "HH:MM:ss"
});

// Access this easier with the following.
// const logger = require('./lib/methods.js').logger;
module.exports.logger = tracer;