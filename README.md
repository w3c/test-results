test-results
============

These are results for selected tests from the [web-platform-tests](https://github.com/w3c/web-platform-tests) repo.

To browse particular test results, visit the following:

* `http://w3c.github.io/test-results/SHORTNAME/all.html`
* `http://w3c.github.io/test-results/SHORTNAME/complete-fails.html`
* `http://w3c.github.io/test-results/SHORTNAME/less-than-2.html`

…where `SHORTNAME` is a subdirectory name from https://github.com/w3c/test-results.

For example, http://w3c.github.io/test-results/webmessaging/all.html

To add new tests results:

1. Produce a set of JSON test result files using http://w3c-test.org/tools/runner/index.html (or a local copy)
2. Push the results into the right directory in this repo (using the same name as the directory in WPT). Create the directory if it doesn't exist.
3. Generate the report using wptreport https://www.npmjs.org/package/wptreport
