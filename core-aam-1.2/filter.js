/* jshint unused: false */

exports.excludeFile = function (file) {
    // New mappings: role-parity
    if (/blockquote-manual.html/.test(file)) return false;
    if (/caption-manual.html/.test(file)) return false;
    if (/paragraph-manual.html/.test(file)) return false;
    if (/deletion-manual.html/.test(file)) return false;
    if (/insertion-manual.html/.test(file)) return false;
    if (/meter-manual.html/.test(file)) return false;
    if (/subscript-manual.html/.test(file)) return false;
    if (/superscript-manual.html/.test(file)) return false;
    if (/time-manual.html/.test(file)) return false;

    // Changed properties
    if (/aria-expanded_true_on_application-manual.html/.test(file)) return false;
    if (/aria-expanded_true_on_checkbox-manual.html/.test(file)) return false;
    if (/aria-expanded_true_on_switch-manual.html/.test(file)) return false;
    if (/aria-posinset_and_aria-setsize_on_row-manual.html/.test(file)) return false;
    if (/aria-required_true_on_checkbox-manual.html/.test(file)) return false;
    if (/group_as_child_of_listbox-manual.html/.test(file)) return false;
    if (/math_role_children_are_not_presentational-manual.html/.test(file)) return false;
    if (/menuitemcheckbox_child_of_group-manual.html/.test(file)) return false;

    // For 1.2's implementation report, we only want to include files which
    // have changes compared to 1.1. Thus most should be excluded.
    return true;
};

exports.excludeCase = function (file, name) {
    return false;
};
