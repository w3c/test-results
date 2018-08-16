Accessible Name and Description Computation 1.1: Test Results
=============================================================

Implementation Report
---------------------
* [all](all.html)
* [less than two](less-than-2.html)
* [complete failures](complete-fails.html)

Supported Platform Accessibility APIs
-------------------------------------

The following platform accessibility APIs are included in the Accessible Name
and Description Computation specification:

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

* FF01 - Firefox on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* GC01 -  Chromium on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <https://www.chromium.org/Home>

* WK02 - WebKit/Safari on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>

* GC02 - Chrome on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>

* FF02 - Firefox on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* FF03 - Firefox on Windows using IAccessible2 + MSAA
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* GC03 - Chrome on Windows using IAccessible2 + MSAA
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>

* ME04 - Edge on Windows using UIA
  * email: Melanie.Richards@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>

Adding new results
------------------

To add new tests results:

1. Run the accname tests on your platform 
  * Be sure to have the ATTA for your platform under test running on your test machine.
  * Be sure to specify `/accname/` as the path for which tests to run.
  * Click start to run the automated tests.
  * After the tests complete, be sure to click the `Download JSON results` button to retrieve and
    save your JSON test results file.
2. Fork the [w3c/test-results](https://github.com/w3c/test-results) repo if you haven't already.
3. Select a unique two-letter abbreviation for your implementation under test (e.g., FF for Firefox)
   and add it to the 'Index of implementations in reports' in the README.md file in your forked copy.
   Use the information provided by previous implementations in the list as a model.
4. Rename your JSON test-results file using the two letter abbreviation you chose and a two digit
   number value representing the Accessibility API as defined above.
5. Place your newly renamed results files in the accname directory.
6. Create a pull request with your updated files.
7. When it is merged the maintainers will update the overall results reports automatically

If you want to see what your implementation test results reports would look like locally, use
the [wptreport tool](https://github.com/w3c/wptreport) to build a report with a command line like
`wptreport -f -m -s "Accessible Name and Description Computation 1.1"`.
