import { DataTableColumn, DataTableSortOrder } from './types';

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function resolveSelectorValue(row: any, column: DataTableColumn, rowIndex: number) {
  if (!column.selector) {
    if (column.accessorKey) {
      return row ? row[column.accessorKey] : null;
    }

    if (column.id !== null && column.id !== undefined && row && row[column.id as any] !== undefined) {
      return row[column.id as any];
    }

    return null;
  }

  if (typeof column.selector === 'function') {
    return column.selector(row, rowIndex);
  }

  return row ? row[column.selector] : null;
}

export function resolveCellValue(row: any, column: DataTableColumn, rowIndex: number) {
  if (column.format) {
    return column.format(row, rowIndex);
  }

  return resolveSelectorValue(row, column, rowIndex);
}

export function toCellText(value: any) {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

export function styleObjectToString(style: { [key: string]: string | number } | null | undefined) {
  var output: string[] = [];
  var key: string;

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

export function sortRows(rows: any[], column: DataTableColumn | null, direction: DataTableSortOrder) {
  var output = rows.slice(0);
  var multiplier = direction === 'asc' ? 1 : -1;

  if (!column) {
    return output;
  }

  output.sort(function(left: any, right: any) {
    if (column && column.sortFunction) {
      return column.sortFunction(left, right) * multiplier;
    }

    return compareUnknown(
      resolveSelectorValue(left, column as DataTableColumn, rows.indexOf(left)),
      resolveSelectorValue(right, column as DataTableColumn, rows.indexOf(right))
    ) * multiplier;
  });

  return output;
}

function compareUnknown(left: any, right: any) {
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

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, function(match: string) {
    return '-' + match.toLowerCase();
  });
}
