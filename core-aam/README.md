Core Accessibility API Mappings 1.1: Test Results
=================================================

Candidate Recommendation Exit Criteria
--------------------------------------

The Accessible Rich Internet Applications Working Group intends to exit the
Candidate Recommendation stage and submit the Core Accessibility API Mappings 1.1
specification for consideration as a W3C Proposed Recommendation after documenting
implementation of each feature.

For each set of mappings to a given platform, at least one implemenation of 75% of
the mappings to that platform will demonstrate implementability on that platform.
Multiple implementations of each platform are not required because some platforms
have only one implementation.

Supported Platform Accessibility APIs
-------------------------------------

The following platform accessibility APIs are included in the Core Accessibility
API Mappings specification:

* 01: ATK (GNU/Linux): [Summary of results](atk/all.html)
* 02: AX API (macOS): [Summary of results](axapi/all.html)
* 03: IAccessible2 (Windows): [Summary of results](ia2/all.html)
* 04: MSAA (Windows): [Summary of results](msaa/all.html)
* 05: UIA (Windows): [Summary of results](uia/all.html)

These two-digit designators are appended to a two-character identifier for the
user agent to identify the implementation being tested.

Index of Implementations
------------------------

* WK01 - WebKit on Linux using ATK - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>
  * status: 98% of mappings successfully implemented (231/237)

* FF01 - Firefox on Linux using ATK - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 78% of mappings successfully implemented (185/237)

* WK02 - WebKit/Safari on macOS using AX API - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>
  * status: 95% of mappings successfully implemented (195/205)

* GC02 - Chrome on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>
  * status: 68% of mappings successfully implemented (139/205)

* FF02 - Firefox on macOS using AX API
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 41% of mappings successfully implemented (84/205)

* FF03 - Firefox on Windows using IAccessible2 - NEEDS EVALUATION
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>
  * status: 85 PASS, 62 FAIL, 25 "Unhandled rejection" ERROR

* GC03 - Chrome on Windows using IAccessible2 - NEEDS EVALUATION
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>
  * status: 67 PASS, 80 FAIL, 25 "Unhandled rejection" ERROR

* FF04 - Firefox on Windows using MSAA - DEMONSTRATES IMPLEMENTABILITY
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>
  * status: 75% of mappings successfully implemented (98/130)

* GC04 - Chrome on Windows using MSAA
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>
  * status: 72% of mappings successfully implemented (94/130)

* ME05 - Edge on Windows using UIA - DEMONSTRATES IMPLEMENTABILITY
  * email: John.Jansen@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>
  * status: 89% of mappings successfully implemented (187/210)