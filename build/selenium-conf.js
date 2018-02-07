const process = require('process')

module.exports = {
    // if you need to know the latest selenium server please check link below
    // https://selenium-release.storage.googleapis.com/index.html
    selenium: {
        version: '3.8.1',
        baseURL: 'https://selenium-release.storage.googleapis.com'
    },

    //this is to manage version of chrome driver
    driver: {
        chrome: {
            // if you need to know the latest chrome driver link please check link below
            // https://chromedriver.storage.googleapis.com/index.html
            version: '2.35',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com'
        }
    }
} 