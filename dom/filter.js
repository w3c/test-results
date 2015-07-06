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
    return false;
};
