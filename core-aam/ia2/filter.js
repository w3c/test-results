/* jshint unused: false */

exports.excludeFile = function (file) {
    // The following tests are for features where the IAccessible2 mapping is
    // limited to MSAA (which IA2 builds upon).
    if (/alert-manual.html/.test(file)) return true;
    if (/alertdialog-manual.html/.test(file)) return true;
    if (/application-manual.html/.test(file)) return true;
    if (/aria-busy_false-manual.html/.test(file)) return true;
    if (/aria-busy_true-manual.html/.test(file)) return true;
    if (/aria-busy_value_changes-manual.html/.test(file)) return true;
    if (/aria-checked_value_changes-manual.html/.test(file)) return true;
    if (/aria-disabled_false-manual.html/.test(file)) return true;
    if (/aria-disabled_true-manual.html/.test(file)) return true;
    if (/aria-disabled_value_changes-manual.html/.test(file)) return true;
    if (/aria-expanded_false-manual.html/.test(file)) return true;
    if (/aria-expanded_true-manual.html/.test(file)) return true;
    if (/aria-expanded_value_changes-manual.html/.test(file)) return true;
    if (/aria-hidden_true-manual.html/.test(file)) return true;
    if (/aria-invalid_value_changes-manual.html/.test(file)) return true;
    if (/aria-modal_false-manual.html/.test(file)) return true;
    if (/aria-modal_true-manual.html/.test(file)) return true;
    if (/aria-multiselectable_false-manual.html/.test(file)) return true;
    if (/aria-multiselectable_true-manual.html/.test(file)) return true;
    if (/aria-orientation_undefined_new-manual.html/.test(file)) return true;
    if (/aria-pressed_false-manual.html/.test(file)) return true;
    if (/aria-pressed_mixed-manual.html/.test(file)) return true;
    if (/aria-pressed_value_changes-manual.html/.test(file)) return true;
    if (/aria-readonly_is_unspecified_on_gridcell_new-manual.html/.test(file)) return true;
    if (/aria-readonly_true_on_checkbox-manual.html/.test(file)) return true;
    if (/aria-readonly_true_on_radiogroup-manual.html/.test(file)) return true;
    if (/aria-readonly_true_on_textbox-manual.html/.test(file)) return true;
    if (/aria-readonly_value_changes-manual.html/.test(file)) return true;
    if (/aria-required_value_changes-manual.html/.test(file)) return true;
    if (/aria-selected_false-manual.html/.test(file)) return true;
    if (/aria-selected_true-manual.html/.test(file)) return true;
    if (/aria-valuenow_value_changes-manual.html/.test(file)) return true;
    if (/aria-valuetext_value_changes-manual.html/.test(file)) return true;
    if (/button_with_aria-haspopup_dialog_new-manual.html/.test(file)) return true;
    if (/button_with_aria-haspopup_true-manual.html/.test(file)) return true;
    if (/button_with_default_values_for_aria-pressed_and_aria-haspopup-manual.html/.test(file)) return true;
    if (/checkbox-manual.html/.test(file)) return true;
    if (/dialog-manual.html/.test(file)) return true;
    if (/directory-manual.html/.test(file)) return true;
    if (/exclude_element_hidden_with_css_display_none-manual.html/.test(file)) return true;
    if (/exclude_element_hidden_with_css_visibility_hidden-manual.html/.test(file)) return true;
    if (/exclude_element_hidden_with_html5_hidden-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_button-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_checkbox_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_img-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_math-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_menuitemcheckbox_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_menuitemradio_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_option_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_progressbar-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_radio_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_scrollbar-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_separator-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_slider-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_switch_new-manual.html/.test(file)) return true;
    if (/exclude_presentational_children_of_tab_new-manual.html/.test(file)) return true;
    if (/group-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-controls-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-describedby-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-details_new-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-errormessage_new-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-flowto-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-labelledby-manual.html/.test(file)) return true;
    if (/include_element_referenced_by_global_aria-owns-manual.html/.test(file)) return true;
    if (/include_element_that_is_focusable-manual.html/.test(file)) return true;
    if (/include_element_with_id_inside_element_with_aria-activedescendant-manual.html/.test(file)) return true;
    if (/math-manual.html/.test(file)) return true;
    if (/menuitem_not_owned_by_or_child_of_group-manual.html/.test(file)) return true;
    if (/menuitem_owned_by_or_child_of_group-manual.html/.test(file)) return true;
    if (/none_new-manual.html/.test(file)) return true;
    if (/none_used_on_element_that_is_focused_or_fires_event-manual.html/.test(file)) return true;
    if (/option_inside_combobox-manual.html/.test(file)) return true;
    if (/option_not_inside_combobox-manual.html/.test(file)) return true;
    if (/presentation-manual.html/.test(file)) return true;
    if (/presentation_used_on_element_that_is_focused_or_fires_event-manual.html/.test(file)) return true;
    if (/radio-manual.html/.test(file)) return true;
    if (/radiogroup-manual.html/.test(file)) return true;
    if (/row_inside_treegrid-manual.html/.test(file)) return true;
    if (/row_not_inside_treegrid-manual.html/.test(file)) return true;
    if (/rowgroup-manual.html/.test(file)) return true;
    if (/separator_non-focusable-manual.html/.test(file)) return true;
    if (/tab-manual.html/.test(file)) return true;
    if (/tabpanel-manual.html/.test(file)) return true;
    if (/toolbar-manual.html/.test(file)) return true;
    if (/tooltip-manual.html/.test(file)) return true;
    if (/treeitem-manual.html/.test(file)) return true;

    // The platform mapping is "not mapped" for the following tests:
    if (/aria-roledescription_is_empty_or_whitespace_characters_new-manual.html/.test(file)) return true;

    return false;
};

exports.excludeCase = function (file, name) {
    return false;
};
