const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf.js')

selenium.start({
    drivers: seleniumConfig.driver
}, function (err, child) {
    if (err) throw new Error(`Selenium start failed: ${err}`)
    console.log(`Selenium has already started maually，process PID: ${child.pid}`)
    console.log('when not need selenium we can close this process.')
})