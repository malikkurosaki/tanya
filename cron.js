var CronJob = require('cron').CronJob;
// import { CronJob } from 'cron';
var job = new CronJob(
    '03 16 * * * ',
    function() {
        console.log('You will see this message every second');
    },
    null,
    true
);

job.stop();