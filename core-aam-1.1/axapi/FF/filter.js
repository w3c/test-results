/* jshint unused: false */

exports.excludeFile = function (file) {
    // The platform mapping is "not mapped" for the following tests,
    // and this has not changed during the ARIA + Core AAM 1.1 cycle.
    if (/aria-autocomplete_both-manual.html/.test(file)) return true;
    if (/aria-autocomplete_inline-manual.html/.test(file)) return true;
    if (/aria-autocomplete_list-manual.html/.test(file)) return true;
    if (/aria-dropeffect_none-manual.html/.test(file)) return true;
    if (/aria-haspopup_false-manual.html/.test(file)) return true;
    if (/aria-multiline_false-manual.html/.test(file)) return true;
    if (/aria-multiline_true-manual.html/.test(file)) return true;
    if (/aria-multiselectable_false-manual.html/.test(file)) return true;
    if (/aria-multiselectable_true-manual.html/.test(file)) return true;
    if (/aria-sort_none-manual.html/.test(file)) return true;

    // The platform mapping is "not mapped" for the following tests,
    // which cover features introduced during the 1.1 cycle.
    if (/aria-details_new-manual.html/.test(file)) return true;
    if (/aria-keyshortcuts_new-manual.html/.test(file)) return true;

    // There is no platform accessibility signal expected when the property
    // value changes in the following tests: 
    if (/aria-current_value_changes-manual.html/.test(file)) return true;
    if (/aria-disabled_value_changes-manual.html/.test(file)) return true;
    if (/aria-dropeffect_value_changes-manual.html/.test(file)) return true;
    if (/aria-grabbed_value_changes-manual.html/.test(file)) return true;
    if (/aria-pressed_value_changes-manual.html/.test(file)) return true;
    if (/aria-readonly_value_changes-manual.html/.test(file)) return true;
    if (/aria-required_value_changes-manual.html/.test(file)) return true;

    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};
