var plugin = require('./plugin');
plugin.init();

module.exports = {
    onRequest: plugin.onRequest,
    onDestroy: plugin.onDestroy
};
