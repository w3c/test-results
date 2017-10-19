WAI ARIA 1.1 Test Results
=========================

* <https://w3c.github.io/test-results/wai-aria/all.html>
* <https://w3c.github.io/test-results/wai-aria/less-than-2.html>
* <https://w3c.github.io/test-results/wai-aria/complete-fails.html>

List of supported AT APIs
=========================

01. ATK
02. AX API
03. IAccessible2
04. MSAA
05. UIA

Use these two digit designators to distinguish which AT API the test was run using (e.g., FF01 would be FireFox via ATK).


Index of implementations in reports
===================================

* FF01 - Firefox on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* FF02 - Firefox on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* FF03 - Firefox on Windows using IAccessible2
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* FF04 - Firefox on Windows using MSAA
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* WK01 - WebKit on Linux using ATK
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>

* WK02 - WebKit/Safari on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>

* GC02 - Chrome on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>

* GC03 - Chrome on Windows using IAccessible2
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>

* GC04 - Chrome on Windows using MSAA
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>

* ME05 - Edge on Windows using UIA
  * email: John.Jansen@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>

Adding new results
==================

To add new tests results:

1. Run the wai-aria tests on your platform 
  * Be sure to have the ATTA for your platform under test running on your test machine.
  * Be sure to specify `/wai-aria/aria11/` as the path for which tests to run.
  * Click start to run the automated tests.
  * After the tests complete, be sure to click the `Download JSON results` button to retrieve and save your JSON test results file.
2. Fork the w3c/test-results repo if you haven't already (https://github.com/w3c/test-results)
3. Select a unique two letter abbreviation for your implementation under test (e.g., FF for Firefox) and add it to the 'Index of implementations in reports' in the /annotation-model/README.md file in your forked copy. Provide implementation name, contact email, Website (if publicly available), GitHub repository (if you have one). Use the information provided by previous implementations in the list as a model.
4. Rename your JSON test-results file using the two letter abbreviation you chose and a two digit number value representing the AT API as
   defined above.
5. Place your newly renamed results files in the wai-aria directory
6. Create a pull request with your updated files
7. When it is merged the maintainers will update the overall results reports automatically

If you want to see what your implementation test results reports would look like locally, use the wptreport tool (https://github.com/spec-ops/wptreport) to build a 
report with a command line like `wptreport -f -m -s "WAI ARIA 1.1"`

