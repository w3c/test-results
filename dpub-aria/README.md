Digital Publishing WAI-ARIA Module 1.0: Test Results
====================================================

Candidate Recommendation Exit Criteria
--------------------------------------

The Accessible Rich Internet Applications Working Group intends to exit the
Candidate Recommendation stage and submit the Digital Publishing WAI-ARIA
Module 1.0 specification for consideration as a W3C Proposed Recommendation
after documenting implementation of each feature.

For this specification to be advanced to Proposed Recommendation, it has to be
proven that roles defined in this specification have sufficient usage by the
target communities. More specifically, it has to be documented that each Digital
Publishing Role is used (at least in preliminary prototypes, not necessarily in
full production yet) by two, independent document authors/publishers as a means
to structure documents, where “usage” means:

* the role attribute value is used, as defined in this specification; or, as a
  fallback
* the epub:type attribute, defined for the purpose of Semantic Inflection in
  the EPUB Content Documents specification, is used with the related value (when
  specified in the detailed specification of the role) in the EPUB Structural
  Semantic Vocabulary.

Publisher Implementations
-------------------------

The following table provides a list of publishers who have stated that they are currently using the vocabulary in production or who are in the process of rolling out their implementations.

Note that all respondents indicated they are already using the Digital Publishing vocabulary in conjunction with the ARIA `role` attribute (i.e., none of the recorded uses are based on a projected change from the `epub:type` attribute once the vocabulary becomes a recommendation).

<table>
    <thead>
        <tr>
            <th>Role</th>
            <th>Wiley</th>
            <th>Pearson</th>
            <th>Hachette</th>
            <th>HMH</th>
            <th>AMS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>doc-abstract</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-acknowledgments</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-afterword</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-appendix</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-backlink</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-biblioentry</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-bibliography</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-biblioref</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-chapter</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-colophon</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-conclusion</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-cover</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-credit</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-credits</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-dedication</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-endnote</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-endnotes</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-epigraph</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-epilogue</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-errata</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-example</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-footnote</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-foreword</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-glossary</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-glossref</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-index</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-introduction</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-noteref</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
        <tr>
            <th>doc-notice</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-pagebreak</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-pagelist</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-part</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-preface</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-prologue</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-pullquote</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-qna</th>
            <td></td>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-subtitle</th>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-tip</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td></td>
        </tr>
        <tr>
            <th>doc-toc</th>
            <td></td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
            <td>X</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="6">
                HMH = Houghton Mifflin Harcourt<br/>
                AMS = American Mathematical Society
            </td>
        </tr>
    </tfoot>
</table>

Authoring Tool Implementations
------------------------------

The [BlueGriffon](http://bluegriffon.org/) editor includes the ability to author roles from the Digital Publishing vocabulary in both EPUB publications and (X)HTML pages.


Reading System Implementations
------------------------------

As EPUB 3 reading systems are built on browser cores, they will inherit traditional support for the Digital Publishing roles as their mappings are implemented.

Developers of the [Readium](http://readium.org/) reading system implemented experimental support for the `role` attribute in place of `epub:type` during the EPUB 3.1 revision, for the specialized  purposes it serves (e.g., identifying the table of contents). The implementation was not publicly released, however, because the `epub:type` attribute was retained as the primary semantic inflection mechanism.

As many other reading systems already use `epub:type` to provide special beahviours (e.g., pop-up footnotes), it is fully expected that support for the DPUB-ARIA publishing roles will grow as future publishing standards move to use roles as their primary means of semantic inflection.
