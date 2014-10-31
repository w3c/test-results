test-results
============

To add new tests results:

1. Produce a set of JSON test result files using http://w3c-test.org/tools/runner/index.html (or a local copy)
2. Push the results into the right directory in this repo (using the same name as the directory in WPT). Create the directory if it doesn't exist.
3. generate the report using wptreport https://www.npmjs.org/package/wptreport
