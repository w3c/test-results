Graphics ARIA Accessibility API Mappings 1.0: Test Results
==========================================================

These results demonstrate implementability of the Graphics ARIA roles as well as their accessibility API mappings. The reason these tests can be used for both specifications is that there are no normative "MUST" statements in Graphics ARIA for user agents beyond implementation of the roles. And implementation of the Graphics ARIA roles can be fully tested by the presence of the mappings specified in the Graphics AAM.

Implementation Report
---------------------
* [all](all.html)
* [less than two](less-than-2.html)
* [complete failures](complete-fails.html)

Supported Platform Accessibility APIs
-------------------------------------

The following platform accessibility APIs are included in the Graphics ARIA
Accessibility API Mappings specification:

* 01: ATK (GNU/Linux)
* 02: AX API (macOS)
* 03: MSAA + IAccessible2 (Windows)
* 04: UIA (Windows)

These two-digit designators are appended to a two-character identifier for the
user agent to identify the implementation being tested.

Index of Implementations
------------------------

* WK01 - WebKit on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>
  * status: 100% of mappings successfully implemented (6/6)

* FF01 - Firefox on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 100% of mappings successfully implemented (6/6)

* WK02 - WebKit/Safari on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>
  * status: 100% of mappings successfully implemented (6/6)

* GC02 - Chromium on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>
  * status: 33% of mappings successfully implemented (2/6)
  * note: The only failures are related to the AXRoleDescription. The AXRole and AXSubrole are 100% correctly implemented.

* FF02 - Firefox on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 100% of mappings successfully implemented (6/6)

* FF03 - Firefox on Windows using MSAA + IAccessible2
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>
  * status: 100% of mappings successfully implemented (6/6)

* ME04 - Edge on Windows using UIA
  * email: Melanie.Richards@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>
  * status: 100% of mappings successfully implemented (6/6)

Adding new results
------------------

To add new tests results:

1. Run the graphics-aam tests on your platform 
  * Be sure to have the ATTA for your platform under test running on your test machine.
  * Be sure to specify `/graphics-aam/` as the path for which tests to run.
  * Click start to run the automated tests.
  * After the tests complete, be sure to click the `Download JSON results` button to retrieve and
    save your JSON test results file.
2. Fork the [w3c/test-results](https://github.com/w3c/test-results) repo if you haven't already.
3. Select a unique two-letter abbreviation for your implementation under test (e.g., FF for Firefox)
   and add it to the 'Index of implementations in reports' in the README.md file in your forked copy.
   Use the information provided by previous implementations in the list as a model.
4. Rename your JSON test-results file using the two letter abbreviation you chose and a two digit
   number value representing the Accessibility API as defined above.
5. Place your newly renamed results files in the graphics-aam directory.
6. Create a pull request with your updated files.
7. When it is merged the maintainers will update the overall results reports automatically

If you want to see what your implementation test results reports would look like locally, use
the [wptreport tool](https://github.com/w3c/wptreport) to build a report with a command line like
`wptreport -f -m -s "Graphics ARIA AAM 1.0"`.

