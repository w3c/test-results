# Accessible Name and Description Computation 1.1: Test Results

## Exit Criteria

As stated in the specification's [Candidate Recommendation exit criteria](https://www.w3.org/TR/accname/#exit-criteria):

> For each aspect of the name and description computation, at least two
> implementations will demonstrate implementability of that feature.
> Implementations consist of web browsers which expose the computed accessible
> name or description to accessibility APIs in a manner appropriate to the
> platform. Specific accessibility API mappings are not in scope of this
> specification; they are used only to evaluate the computed name and description.

Because the implementation of the name and description calculation is, for the
most part, platform agnostic, "implementation" and "browser" were treated in a
platform-agnostic manner. Thus a test which passes in Firefox for ATK (Linux),
Firefox for IAccessible2 (Windows), and Firefox for AXAPI (macOS) is treated as
one passing implementation; not three. The same is true for Chrome/Chromium on
each of the aforementioned platforms. WebKitGtk and Safari were similarly treated
as one implementation rather than two.

Detailed results for each browser + API combination tested and a platform-agnostic
summary have each been provided below.

## Implementation Report Details

* [all](all.html) - 153 / 153
* [less than two passes](less-than-2.html) - 0 / 153
* [complete failures](complete-fails.html) - 0 / 153

### Results for Browsers

* Passing for Firefox for at least one API: 148 / 153 (97%)
* Passing for Chrome/Chromium for at least one API: 148 / 153 (97%)
* Passing for Safari/WebKit for at least one API: 142 (93%)
* Passing for Edge (only implements UIA): 85 (56%)

Of the 153 tests:
* 78 passed on Chrome/Chromium, Edge, Firefox, and Safari/WebKitGtk
* 61 passed on three of the four:
  * 57 on Chrome/Chromium, Firefox, and Safari/WebKitGtk
  * 2 on Chrome/Chromium, Edge, and Firefox
  * 2 on Edge, Firefox, and Safari/WebKitGtk
* 14 passed on two of the four:
  * 6 on Chrome/Chromium and Firefox
  * 4 on Chrome/Chromium and Safari/WebKitGtk
  * 2 on Edge and Firefox
  * 1 on Firefox and Safari/WebKitGtk
  * 1 on Chrome/Chromium and Edge

## Results for Each Browser + API Combination Tested

* WK01 - WebKitGtk on Linux using ATK - 142 / 153 (93%)
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>

* FF01 - Firefox on Linux using ATK - 148 / 153 (97%)
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* GC01 -  Chromium on Linux using ATK - 148 / 153 (97%)
  * email: jdiggs@igalia.com
  * link: <https://www.chromium.org/Home>

* WK02 - Safari on macOS using AX API - 120 / 153 (78%)
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>

* GC02 - Chromium on macOS using AXAPI - 147 / 153 (96%)
  * email: jdiggs@igalia.com
  * link: <https://www.chromium.org/Home>

* FF02 - Firefox on macOS using AX API - 139 / 153 (91%)
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* FF03 - Firefox on Windows using IAccessible2 + MSAA - 148 / 153 (97%)
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* GC03 - Chrome on Windows using IAccessible2 + MSAA - 148 / 153 (97%)
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>

* ME04 - Edge on Windows using UIA - 85 / 153 (56%)
  * email: Melanie.Richards@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>

## Regarding Name Sources for AXAPI

Unlike other platforms, macOS's AXAPI has three different possibilities for
exposure of the result of the calculated name:

* AXDescription
* AXTitle
* AXTitleUIElement

When verifying that user agents on macOS calculated the name correctly, each
of the above sources was taken into consideration in the order listed above.
If the AXDescription had no result, the AXTitle was examined. If the AXTitle
also had no result, the name was taken from the children of the AXTitleUIElement.
