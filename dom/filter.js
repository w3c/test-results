/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/closest/.test(file)) return true;
    if (/ProgressEvent/.test(file)) return true;
    if (/historical/.test(file)) return true;
    return false;
    // /html/dom/reflection-obsolete.html ?
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    if (/prepend|append\(/i.test(name)) return true;
    if (/AttributeNode/i.test(name)) return true;
    if (/closest/i.test(name)) return true;
    if (/\bmatches\b/.test(name)) return true;
    if (/\bafter\b/.test(name)) return true;
    if (/\bbefore\b/.test(name)) return true;
    if (/\bquery(?:All)\b/.test(name)) return true;
    // these basically repeat the tests
    if (/\binputEncoding\b/.test(name)) return true;
    // those are testing Encoding
    if (/macintosh|windows-|x-mac|gbk|hz|big5|csiso2022kr|iso-2022-cn|iso-2022-kr/i.test(name)) return true;
    return false;
};
