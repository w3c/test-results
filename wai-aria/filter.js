/* jshint unused: false */

exports.excludeFile = function (file) {
    // The following test is for a condition which the Working Group decided would
    // wait for ARIA 1.2:
    if (/errormessage_object_in_valid_state-manual.html/.test(file)) return true;

    return false;
};

