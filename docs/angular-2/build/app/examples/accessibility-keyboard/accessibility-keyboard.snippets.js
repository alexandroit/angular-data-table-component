System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AccessibilityKeyboardSnippets;
    return {
        setters: [],
        execute: function () {
            exports_1("AccessibilityKeyboardSnippets", AccessibilityKeyboardSnippets = {
                html: "<stackline-data-table\n  title=\"Accessibility keyboard contract\"\n  ariaLabel=\"Accessibility keyboard orders\"\n  [columns]=\"orderColumns\"\n  [data]=\"orders\"\n  [selectableRows]=\"true\"\n  [selectableRowsHighlight]=\"true\"\n  [expandableRows]=\"true\"\n  [expandableRowTemplate]=\"orderDetail\"\n  [keyboardRows]=\"true\"\n  [pagination]=\"true\"\n  [paginationPerPage]=\"5\">\n</stackline-data-table>",
                ts: "// Native inputs/buttons keep their own keyboard behavior.\n// When a data row receives focus, Enter or Space activates the row:\n// selectable rows toggle selection, expandable rows toggle details.\n// Headers expose aria-sort and selection controls expose aria-checked.\nkeyboardRows = true;"
            });
        }
    };
});
