/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/extension/.test(file)) return true;
    // The pointerevent_movementxy-manual.html is failing due to inconsistency in pointerlock spec.
    if (/pointerevent_movementxy/.test(file)) return true;
    // The solution to this test is postposted to V3: https://github.com/w3c/pointerevents/issues/75
    if (/pointerevent_click_during_capture/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    // if (/macintosh|windows-|x-mac|gbk|hz|big5|csiso2022kr|iso-2022-cn|iso-2022-kr/i.test(name)) return true;
    return false;
};
