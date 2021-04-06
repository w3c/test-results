Core Accessibility API Mappings 1.2: Test Results
=================================================

Implementation Report
---------------------
At this time we are still writing tests, obtaining results, and seeking
missing implementations.

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
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* WK02 - WebKit/Safari on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>

* GC02 - Chromium on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>

* FF02 - Firefox on macOS using AX API
  * email: jdiggs@igalia.com
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

