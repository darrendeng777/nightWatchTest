**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to koodo.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */
const locator = {
  selfServeLink: '(//a[contains(text(),"Self Serve")])[2]',
  usernameField: '#IDToken1',
  passwordField: '#IDToken2',
}

const userInfo = {
  URL: 'https://www.koodomobile.com'，
  username: 'sheldon_hua@telusinternal.com',
  password: 'Koodouat1234',
  pageTitle: 'Overview | Koodo Mobile'
}


module.exports = {

  'demo test koodo' : function (client) {
    client
      .url(userInfo.URL)
      .waitForElementPresent('body', 1000)
      .assert.containsText('.quicknav-label','Shop');
  },

  'go to selfserve' : function(client) {
    client
      .click('xpath',locator.selfServeLink)
      .setValue(locator.usernameField, [userInfo.username, client.Keys.ENTER])
      .setValue(locator.passwordField, [userInfo.password, client.Keys.ENTER])
      .pause(5000)
      .assert.title(userInfo.pageTitle)
      .end();
  }

};