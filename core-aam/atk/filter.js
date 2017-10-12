/* jshint unused: false */

exports.excludeFile = function (file) {
    // The platform mapping is "not mapped" for the following tests:
    if (/aria-haspopup_false-manual.html/.test(file)) return true;
    if (/aria-roledescription_is_empty_or_whitespace_characters_new-manual.html/.test(file)) return true;

    // These tests are for signals associated with deprecated ARIA features.
    // The mapping has not changed during the 1.1 ARIA + Core AAM cycle.
    if (/aria-dropeffect_value_changes-manual.html/.test(file)) return true;
    if (/aria-grabbed_value_changes-manual.html/.test(file)) return true;

    // This test is for a signal which only makes sense if the accessible object
    // was not pruned from or added to the accessibility tree as a result of the
    // value of aria-hidden changing. The desired (user agents SHOULD) mapping
    // for aria-hidden is tree exclusion/inclusion. Thus this test is no longer
    // relevant. Plus this mapping has not changed during the 1.1 cycle.
    if (/aria-hidden_value_changes-manual.html/.test(file)) return true;

    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};
