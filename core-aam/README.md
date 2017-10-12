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
* 03: IAccessible2 (Windows): Results pending
* 04: MSAA (Windows): Results pending
* 05: UIA (Windows): Results pending

These two-digit designators are appended to a two-character identifier for the
user agent to identify the implementation being tested.

Index of Implementations
------------------------

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

* ME05 - Microsoft Edge using UIA
  * email: bbrinza@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>
