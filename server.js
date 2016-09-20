var Bodewell = require("bodewell"),
    os = require("os");

/**
 * Bodewell server resource.
 * @constructor
 * @param {string} host
 */
function Server(host) {
    Bodewell.init(this);

    this.host = String(host);
}

/**
 * Server host name.
 * @type {string}
 * @readonly
 */
Server.prototype.host = null;

module.exports = function() {
    Bodewell.Server = Server;

    Bodewell.extend(Bodewell, function() {
        this.server = new Server(os.hostname());
    });
};
