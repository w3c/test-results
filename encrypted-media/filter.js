/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/polyfill/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    if (/polyfill/i.test(name)) return true;
    return false;
};
