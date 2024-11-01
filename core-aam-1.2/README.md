ARIA 1.2 Implementation Report: CORE-AAM Test Results
=====================================================

These test comprise the proof of implementation for [ARIA 1.2 specification](https://www.w3.org/TR/wai-aria-1.2/) for all testable AUTHORS MUST statements new to ARIA 1.2. The tests are part of the [wpt/CORE-AAM test suite](https://github.com/web-platform-tests/wpt/tree/master/core-aam). Each test shows how the ARIA 1.2 feature must be surface in the platform specific accessibility API as specified in the [CORE-AAM](https://www.w3.org/TR/core-aam-1.2/).

[Results for All New Tests](all.html)

How to interpret the test results:
* Each test file is a single "test" with one or more "subtests". The tests are platform specific. The number of subtests for a test might vary across platforms.
   * For example, look at the test for [the new role deletion](https://github.com/web-platform-tests/wpt/blob/master/core-aam/deletion-manual.html): it has 2 subtests when run on the GNU/Linux platform (ATK API) or macOS platform (AXAPI), but only 1 subtest when run on the Windows platform (IAccessible2 API).
   * Note: The yellow boxes have no meaning. For example, look at [the results for test for the deletion role](https://spectranaut.github.io/test-results/core-aam-1.2/all#test-file-3). All of these tests pass in full. If one platform has less subtests than a different platform, then a yellow box is used to fill space.
* When a test "passes" it proves the implementation of that feature by a browser on a specific platform. For a test to "pass", all of the subtests of the test must pass in a specific browser on a specific platform. According to these test results, we can say that [the new aria `role="deletion"`](https://spectranaut.github.io/test-results/core-aam-1.2/all#test-file-3) has been implemented successfully in Firefox on GNU/Linux, Firefox on Windows (using IAccessible2), Firefox on macOS, Chrome on GNU/Linux, Chrome on macOS, Chrome on Windows (using IAccessible2) and Webkit on macOS.
* All new feature tests pass on at least three browser/platform combinations.

Platform Accessibility APIs
---------------------------

The following platform accessibility APIs are included in the Graphics ARIA
Accessibility API Mappings specification:

* ATK (GNU/Linux)
* AX API (macOS)
* MSAA + IAccessible2 (Windows)
* UIA (Windows) (results not included here)

Index of Implementations in this Report
---------------------------------------

* Firefox on Linux using ATK
  * Date of results collection: 2022-11-04
  * Firefox Version: Version 104.0.0
  * ATK Version: Package: libatk1.0-0, Version: 2.46.0-3
  * email: spectranaut@igalia.com
  * link: <https://www.mozilla.org>

* Chromium on Linux using ATK
  * Date of results collection: 2022-11-04
  * Chrome Version: Version 106.0.5249.91 (Official Build) (64-bit)
  * ATK Version: Package: libatk1.0-0, Version: 2.46.0-3
  * email: spectranaut@igalia.com
  * link: <https://www.google.com/chrome/>

* WebKit/Safari on macOS using AX API
  * Date of results collection: 2022-11-08
  * Safari Version 16.0 (17614.1.25.9.10, 17614)
  * MacOSX Version 12.6
  * email: spectranaut@igalia.com
  * link: <https://webkit.org>

* Chromium on macOS using AX API
  * Date of results collection: 2022-11-08
  * Chrome Version 107.0.5304.87 (Official Build) (arm64)
  * MacOSX Version 12.6
  * email: spectranaut@igalia.com
  * link: <https://www.google.com/chrome/>

* Firefox on macOS using AX API
  * Date of results collection: 2022-11-08
  * Firefox Version 106.0.5
  * MacOSX Version 12.6
  * email: spectranaut@igalia.com
  * link: <https://www.mozilla.org>

* Chromium on Windows using MSAA + IAccessible2
  * Date of results collection: 2022-11-30
  * Chrome Version 107.0.5304.122 (Official Build) (64-bit)
  * Windows 10 Version 21H2
  * email: spectranaut@igalia.com
  * link: <https://www.google.com/chrome/>

* Firefox on Windows using MSAA + IAccessible2
  * Date of results collection: 2022-11-30
  * Firefox Version 107.0.1
  * Windows 10 Version 21H2
  * email: spectranaut@igalia.com
  * link: <https://www.mozilla.org>
