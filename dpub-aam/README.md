Digital Publishing Accessibility API Mappings 1.0: Test Results
===============================================================

Candidate Recommendation Exit Criteria
--------------------------------------

The Accessible Rich Internet Applications Working Group intends to exit the
Candidate Recommendation stage and submit the Digital Publishing Accessibility
API Mappings 1.1 specification for consideration as a W3C Proposed Recommendation
after documenting implementation of each feature.

The requirement is that each role is successfully mapped in at least two implementations
and each implementation maps at least 75% of the roles.

Supported Platform Accessibility APIs
-------------------------------------

The following platform accessibility APIs are included in the Digital Publishing
Accessibility API Mappings specification:

* 01: ATK (GNU/Linux): [Summary of results](atk/all.html)
* 02: AX API (macOS): [Summary of results](axapi/all.html)
* 03: MSAA + IAccessible2 (Windows): [Summary of results](ia2/all.html)
* 04: UIA (Windows): See note below

These two-digit designators are appended to a two-character identifier for the
user agent to identify the implementation being tested.

Index of Implementations
------------------------

* WK01 - WebKit on Linux using ATK - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>
  * status: 100% of mappings successfully implemented (39/39)

* FF01 - Firefox on Linux using ATK - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 100% of mappings successfully implemented (39/39)

* WK02 - WebKit/Safari on macOS using AX API - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>
  * status: 100% of mappings successfully implemented (39/39)

* FF02 - Firefox on macOS using AX API - DEMONSTRATES IMPLEMENTABILITY
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>
  * status: 100% of mappings successfully implemented (39/39)

* FF03 - Firefox on Windows using IAccessible2 + MSAA - DEMONSTRATES IMPLEMENTABILITY
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>
  * status: 90% of mappings successfully implemented (35/39)

Notes
-----

* While Microsoft has provided the Working Group with the mappings through which
  Digital Publishing ARIA roles should be exposed via UIAutomation, [implementation
  in Edge remains "under consideration"](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/digitalpublishingaccessibilityapimappings/).
  There are currently no other accessible user agents which implement UIA support
  for W3C specifications.

* Google has stated that they anticipate implementing support for the Digital Publishing
  ARIA roles in the future. This implementation is expected to include exposure via
  IAccessible2 + MSAA and AX API.


