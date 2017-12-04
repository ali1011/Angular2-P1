"use strict";
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "App_TITLE", {
        get: function () { return 'Application livreur'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config, "App_VERSION", {
        get: function () { return '1.0'; },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map