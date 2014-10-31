test-results
============

To add new tests results:

1. produce a set of json test result files using
 http://w3c-test.org/tools/runner/index.html
 (or a local copy)
2. push the results into the right directory in this repo. Create the directory if it doesn't exist.
3. look into
 https://github.com/w3c/test-results/html
 and copy whatever you need from there to generate the report
4. generate the report using wptreport
  https://www.npmjs.org/package/wptreport
