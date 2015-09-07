/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/drawCustomFocusRing/.test(file)) return true;
    if (/imagesmoothing/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    if (/drawCustomFocusRing/i.test(name)) return true;
    return false;
};
