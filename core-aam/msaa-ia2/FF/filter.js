/* jshint unused: false */

exports.excludeFile = function (file) {
    // These tests are for signals associated with deprecated ARIA features.
    // The mapping has not changed during the 1.1 ARIA + Core AAM cycle.
    if (/aria-dropeffect_value_changes-manual.html/.test(file)) return true;
    if (/aria-grabbed_value_changes-manual.html/.test(file)) return true;
    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};
