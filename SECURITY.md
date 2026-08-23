# Security Policy

## Supported Version

Security fixes are provided for the latest published Angular package line. Older
lines may receive a backport when the affected code is shared and the fix can be
released without changing their public contract.

| Version | Supported |
| --- | --- |
| Latest `22.x` | Yes |
| Earlier majors | Case by case |

## Historical documentation artifacts

The versioned bundles under `docs/angular-*` are generated outputs retained to
preserve previously published Angular compatibility examples. They are not
package source, are not imported by the maintained implementation, and are not
included in the npm package.

For end-of-life Angular lines, replacing bundled Angular, SystemJS, or compiler
code would change the compatibility target. Static-analysis findings confined
to those immutable generated files are reviewed against their actual input flow
and may be classified with an explicit GitHub rationale. Findings in maintained
source or reachable application behavior remain actionable.

## Reporting a Vulnerability

Use [GitHub private vulnerability reporting](https://github.com/alexandroit/angular-data-table-component/security/advisories/new).

Include the affected version, a minimal reproduction, expected impact, and any
suggested mitigation. Please do not open a public issue before a fix is available.

You should receive an initial response within seven days. Confirmed issues will
be coordinated through a patched release and a public advisory when appropriate.
