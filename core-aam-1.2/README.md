Core Accessibility API Mappings 1.2: Test Results
=================================================

Implementation Report
---------------------
These test comprise the proof of implementation for [ARIA 1.2 specification](https://www.w3.org/TR/wai-aria-1.2/) for all testable AUTHORS MUST statements new to ARIA 1.2.

[All Results](https://spectranaut.github.io/test-results/core-aam-1.2/all)

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

* FF01 - Firefox on Linux using ATK
  * Date of results collection: 2022-11-04
  * Firefox Version: Version 104.0.0
  * ATK Version: Package: libatk1.0-0, Version: 2.46.0-3
  * email: spectranaut@igalia.com
  * link: <http://www.mozilla.org>

* GC01 - Chromium on Linux using ATK
  * Date of results collection: 2022-11-04
  * Chrome Version: Version 106.0.5249.91 (Official Build) (64-bit)
  * ATK Version: Package: libatk1.0-0, Version: 2.46.0-3
  * email: spectranaut@igalia.com
  * link: <https://www.google.com/chrome/>

* WK02 - WebKit/Safari on macOS using AX API
  * Date of results collection: 2022-11-08
  * Safari Version 16.0 (17614.1.25.9.10, 17614)
  * MacOSX Version 12.6
  * email: spectranaut@gmail.com
  * link: <https://webkit.org>

* GC02 - Chromium on macOS using AX API
  * Date of results collection: 2022-11-08
  * Chrome Version 107.0.5304.87 (Official Build) (arm64)
  * MacOSX Version 12.6
  * email: spectranaut@gmail.com
  * link: <https://www.google.com/chrome/>

* FF02 - Firefox on macOS using AX API
  * Date of results collection: 2022-11-08
  * Firefox Version 106.0.5
  * MacOSX Version 12.6
  * email: spectranaut@gmail.com
  * link: <http://www.mozilla.org>

* FF03 - Firefox on Windows using MSAA + IAccessible2
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* ME04 - Edge on Windows using UIA
  * email: Melanie.Richards@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>

Generating Results
------------------
1. Save the new results in test-results/core-aam-1.2
2. Be sure to update filter.js to include tests specific to changes in 1.2
3. Run `wptreport -f -m -s "Core-AAM 1.2"` from test-results/core-aam-1.2

