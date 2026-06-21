System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }
    exports_1("clamp", clamp);
    function resolveSelectorValue(row, column, rowIndex) {
        if (!column.selector) {
            if (column.accessorKey) {
                return row ? row[column.accessorKey] : null;
            }
            if (column.id !== null && column.id !== undefined && row && row[column.id] !== undefined) {
                return row[column.id];
            }
            return null;
        }
        if (typeof column.selector === 'function') {
            return column.selector(row, rowIndex);
        }
        return row ? row[column.selector] : null;
    }
    exports_1("resolveSelectorValue", resolveSelectorValue);
    function resolveCellValue(row, column, rowIndex) {
        if (column.format) {
            return column.format(row, rowIndex);
        }
        return resolveSelectorValue(row, column, rowIndex);
    }
    exports_1("resolveCellValue", resolveCellValue);
    function toCellText(value) {
        if (value === null || value === undefined) {
            return '';
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return String(value);
    }
    exports_1("toCellText", toCellText);
    function styleObjectToString(style) {
        var output = [];
        var key;
        if (!style) {
            return '';
        }
        for (key in style) {
            if (style.hasOwnProperty(key) && style[key] !== null && style[key] !== undefined && style[key] !== '') {
                output.push(toKebabCase(key) + ': ' + String(style[key]));
            }
        }
        return output.join('; ');
    }
    exports_1("styleObjectToString", styleObjectToString);
    function sortRows(rows, column, direction) {
        var output = rows.slice(0);
        var multiplier = direction === 'asc' ? 1 : -1;
        if (!column) {
            return output;
        }
        output.sort(function (left, right) {
            if (column && column.sortFunction) {
                return column.sortFunction(left, right) * multiplier;
            }
            return compareUnknown(resolveSelectorValue(left, column, rows.indexOf(left)), resolveSelectorValue(right, column, rows.indexOf(right))) * multiplier;
        });
        return output;
    }
    exports_1("sortRows", sortRows);
    function compareUnknown(left, right) {
        if (left === null || left === undefined) {
            return right === null || right === undefined ? 0 : -1;
        }
        if (right === null || right === undefined) {
            return 1;
        }
        if (typeof left === 'number' && typeof right === 'number') {
            return left - right;
        }
        if (typeof left === 'boolean' && typeof right === 'boolean') {
            return Number(left) - Number(right);
        }
        return String(left).localeCompare(String(right));
    }
    function toKebabCase(value) {
        return value.replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
        });
    }
    return {
        setters: [],
        execute: function () {
        }
    };
});
