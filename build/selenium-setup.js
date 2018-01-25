const selenium = require('selenium-standalone')
const seleniumConfig = require('./selenium-conf.js')

selenium.install({
    version: seleniumConfig.selenium.version,
    baseURL: seleniumConfig.selenium.baseURL,
    drivers: seleniumConfig.driver,
    logger: function (message) { console.log(message) },
    progressCb: function (totalLength, progressLength, chunkLength) {}
}, function (err) {
    if (err) throw new Error(`Selenium install error: ${err}`)
    console.log('Selenium install completed.')
})