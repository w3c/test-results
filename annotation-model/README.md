Annotation Model Test Results
=============================

Placeholder for annotation-model test results. Once some results are available, the 
implementation report will be available at 

* http://w3c.github.io/test-results/annotation-model/all.html

To add new tests results:

1. Select a two letter abbreviation for your implementation under test (e.g., AB)
2. Produce a JSON test result files using http://w3c-test.org/tools/runner/index.html (or a local copy); naming that file using the two letter abbreviation and a two digit representation of the version number under test.
  * Use `/annotation-model` as the path for which tests to run.
  * Click start and there will be three pages, each of which will prompt for the JSON serialization of the annotation.
  * Note that failures in the test results can be caused by the annotation not using that particular feature, and for the optional tests should not be cause for alarm.
3. Fork the test-results repo if you haven't already (https://github.com/w3c/test-results)
4. Place your new _AA00_.json results in the annotation-model directory
5. Create a pull request with your updated file
6. When it is merged the maintainers will update the overall results report automatically (https://w3c.github.io/test-results/annotation-model/all.html)

If you want to see what the report would look like locally, use the wptreport tool (https://github.com/spec-ops/wptreport) to build a 
report with a command line like `wptreport -f -m -s "Annotation Model"`
