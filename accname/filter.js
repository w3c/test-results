/* jshint unused: false */

exports.excludeFile = function (file) {
    // The spec lacks clarity regarding what to do with multiple labels.
    // It also isn't clear if this should be covered by the HTML-AAM or
    // AccName or both. Addressing this will be done as part of 1.2.
    // See GitHub issue #6.
    if (/name_checkbox-label-multiple-label-manual.html/.test(file)) return true;
    if (/name_checkbox-label-multiple-label-alternative-manual.html/.test(file)) return true;

    // AccName doesn't say anything at all about aria-owns. And the ARIA
    // spec doesn't state user agents must modify the accessibility tree to
    // make owned elements children as if they were DOM children. Thus it
    // makes no sense to have exit criteria tests to verify user agents
    // treat owned elements as children as part of the name calculation.
    // Addressing this will be done as part of 1.2.
    // See GitHub issue #25.
    if (/name_file-label-owned-combobox-owned-listbox-manual.html/.test(file)) return true;
    if (/name_file-label-owned-combobox-manual.html/.test(file)) return true;

    // ARIA Working Group consensus is to skip these two tests due
    // to lack of clarity in the spec. Clarifying what implementors
    // should do will be tackled as part of 1.2.
    // See GitHub issue #31.
    if (/name_test_case_659-manual.html/.test(file)) return true;
    if (/name_test_case_660-manual.html/.test(file)) return true;

    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};
