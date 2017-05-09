var rapHost = require('../project.config.js').rapHost

exports.hostConfig = function(isDev) {
  var host = isDev ? rapHost : "''"
  var tempHost = isDev ? "''" : rapHost
  var fileTxt = `module.exports = {
        host: ${host}
        // host: ${tempHost}
      }`

  require('fs').writeFile(require('path').join(__dirname, '../src/modules/js/host-config.js'), fileTxt)
}