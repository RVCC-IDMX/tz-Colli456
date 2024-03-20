/* eslint-disable import/no-extraneous-dependencies */
const moment = require('moment-timezone');

const yargs = require('yargs');

console.log(yargs.argv);

moment.tz.setDefault('America/New_York');

let targetTimezone;

if (yargs.argv._.length !== 1) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimezone = yargs.argv._[0];
}

if (yargs.argv.format === true) {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
