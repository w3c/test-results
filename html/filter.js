/* jshint unused: false */

exports.excludeFile = function (file) {
    return false;
};

exports.excludeCase = function (file, name) {
    if (/Table/.test(name) && /sort/.test(name)) {
        console.log("Skipping " + file + " || " + name);
        return true;
    }
    return false;
};
