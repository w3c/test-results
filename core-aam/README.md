Core Accessibility API Mappings 1.1: Test Results
=================================================

Candidate Recommendation Exit Criteria
--------------------------------------

The Accessible Rich Internet Applications Working Group intends to exit the
Candidate Recommendation stage and submit the [Core Accessibility API Mappings 1.1
specification](https://www.w3.org/TR/core-aam-1.1/) for consideration as a W3C Proposed
Recommendation after documenting implementation of each feature.

For each set of mappings to a given platform, at least one implemenation of 75% of
the mappings to that platform will demonstrate implementability on that platform.
Multiple implementations of each platform are not required because some platforms
have only one implementation.

Number of Subtests Per Platform
-------------------------------

The number of subtests per platform varies due to what a given platform expects to
be mapped and how. For instance, the value of `aria-autocomplete` is not mapped in
either UIA or AX API, but is mapped in both ATK and MSAA + IAccessible2. When a
given attribute is not mapped for a particular platform, that platform will lack
subtests for the exposure of that attribute.

On the flip side, some properties have additional exposure requirements on some
platforms. For example, ATK and MSAA + IAccessible2 each have API for "reverse
relationships" which facilitate the ability of an assistive technology to go
from a referenced element back to the element holding the reference. When a
platform has additional mapping requirements, it will have additional subtests
to test for successful implementation of those requirements.

Index of Implementations
------------------------

* [WebKitGTK on Linux using ATK](atk/WK/all.html) - DEMONSTRATES IMPLEMENTABILITY
  * status: 97% of mappings successfully implemented (231/237)
  * email: jdiggs@igalia.com
  * link: <https://webkitgtk.org>

* [Firefox on Linux using ATK](atk/FF/all.html) - DEMONSTRATES IMPLEMENTABILITY
  * status: 79% of mappings successfully implemented (188/237)
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* [Safari on macOS using AX API](axapi/WK/all.html) - DEMONSTRATES IMPLEMENTABILITY
  * status: 95% of mappings successfully implemented (195/205)
  * email: jdiggs@igalia.com
  * link: <https://webkit.org>

* [Chrome on macOS using AX API](axapi/GC/all.html)
  * status: 68% of mappings successfully implemented (139/205)
  * email: jdiggs@igalia.com
  * link: <https://www.google.com/chrome/>

* [Firefox on macOS using AX API](axapi/FF/all.html)
  * status: 41% of mappings successfully implemented (84/205)
  * email: jdiggs@igalia.com
  * link: <http://www.mozilla.org>

* [Firefox on Windows using MSAA + IAccessible2](msaa-ia2/FF/all.html) - DEMONSTRATES IMPLEMENTABILITY
  * status: 75% of mappings successfully implemented (181/242)
  * email: jongund@illinois.edu
  * link: <http://www.mozilla.org>

* [Chrome on Windows using MSAA + IAccessible2](msaa-ia2/GC/all.html)
  * status: 63% of mappings successfully implemented (152/242)
  * email: jongund@illinois.edu
  * link: <https://www.google.com/chrome/>

* [Edge on Windows using UIA](uia/ME/all.html) - DEMONSTRATES IMPLEMENTABILITY
  * status: 89% of mappings successfully implemented (187/210)
  * email: John.Jansen@microsoft.com
  * link: <https://www.microsoft.com/microsoft-edge>
