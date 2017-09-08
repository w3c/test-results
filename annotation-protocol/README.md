Annotation Protocol test results
================================

Up-to-date result reports are available at:

* https://w3c.github.io/test-results/annotation-protocol/all.html
* https://w3c.github.io/test-results/annotation-protocol/less-than-2.html
BO* https://w3c.github.io/test-results/annotation-protocol/complete-fails.html

Index of implementations tested
===============================

* RI - Reference Implementation
  * Github: https://github.com/w3c/web-platform-tests/blob/master/annotation-protocol/tools/protocol-server.py
* CC - Conquering Corsairs (MangoServer)
  * Github:  https://github.com/azaroth42/MangoServer
* DI - Digirati.co.uk Implementation 
  * Github: https://github.com/dlcs/elucidate-server

Adding new results
==================

To add new tests results:

1. Fork the test-results repo if you haven't already (https://github.com/w3c/test-results)
2. Select a two letter abbreviation for your implementation under test (e.g., AB) and add it to the list above
2. Produce a JSON test result files using http://w3c-test.org/tools/runner/index.html?path=/annotation-protocol (or a local copy); naming that file using the two letter abbreviation and a two digit representation of the version number under test.
  * Use `/annotation-protocol` as the path for which tests to run.
  * Note that failures in the test results can be caused by the server not using that particular feature, and for the optional tests should not be cause for alarm.
4. Place your new .json results in the annotation-protocol directory
5. Create a pull request with your updated file
6. When it is merged the maintainers will update the overall results reports automatically

If you want to see what the report would look like locally, use the wptreport tool (https://github.com/spec-ops/wptreport) to build a 
report with a command line like `wptreport -f -m -s "Annotation Procotol"`

