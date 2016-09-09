/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/mediasource-trackdefault/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    // remove from MSE
    if (/VideoPlaybackQuality/i.test(name)) return true;
    // removed from MSE 1
    if (/TrackDefault/i.test(name)) return true;
    if (/appendStream/i.test(name)) return true;
    return false;
};
