/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/extension/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    // if (/macintosh|windows-|x-mac|gbk|hz|big5|csiso2022kr|iso-2022-cn|iso-2022-kr/i.test(name)) return true;
    return false;
};
