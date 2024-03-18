const yargs = require('yargs');

yargs.tz.setDefault('America/New_York');

let targetTimezone;

if (yargs.argv.length != 3) {
  console.log('Usage: node <script-file> <timezone>');
  yargs.exit(1);
} else {
  targetTimezone = yargs.argv_[0];
}

console.log(`The time at the ${targetTimezone} timezone is ${yargs().tz(targetTimezone).format()}`);
