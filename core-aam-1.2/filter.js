/* jshint unused: false */

exports.excludeFile = function (file) {
    // New mappings: role-parity
    if (/blockquote-manual.html/.test(file)) return false;
    if (/caption-manual.html/.test(file)) return false;
    if (/paragraph-manual.html/.test(file)) return false;

    // For 1.2's implementation report, we only want to include files which
    // have changes compared to 1.1. Thus most should be excluded.
    return true;
};

exports.excludeCase = function (file, name) {
    return false;
};
