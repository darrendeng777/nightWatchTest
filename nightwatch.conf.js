const seleniumConfig = require('./build/selenium-conf')
const path = require('path')

module.exports = (function (settings) {

    // ?? Nightwatch ?? Selenium ????
    settings.selenium.server_path = `${path.resolve()}/node_modules/selenium-standalone/.selenium/selenium-server/${seleniumConfig.selenium.version}-server.jar`

    // ?? Chrome Driver, ? Selenium ??? Chrome ???????
    settings.selenium.cli_args['webdriver.chrome.driver'] = `${path.resolve()}/node_modules/selenium-standalone/.selenium/chromedriver/${seleniumConfig.driver.chrome.version}-${seleniumConfig.driver.chrome.arch}-chromedriver`
    
    return settings;
})(require('./nightwatch.json'))