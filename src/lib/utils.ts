import { DataTableColumn, DataTableSortOrder } from './types';

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function createSafeDictionary<T>() {
  return Object.create(null) as { [key: string]: T };
}

export function hasOwnKey(value: object, key: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(value, key);
}

export function copySafeDictionary<T>(source: { [key: string]: T } | null | undefined) {
  var target = createSafeDictionary<T>();
  var key: string;

  if (!source) {
    return target;
  }

  for (key in source) {
    if (hasOwnKey(source, key)) {
      target[key] = source[key];
    }
  }

  return target;
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
    try {
      var serialized = JSON.stringify(value);
      return serialized === undefined ? '' : serialized;
    } catch (_error) {
      return '[Unserializable value]';
    }
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
    if (hasOwnKey(style, key) && style[key] !== null && style[key] !== undefined && style[key] !== '') {
      output.push(toKebabCase(key) + ': ' + String(style[key]));
    }
  }

  return output.join('; ');
}

export function sortRows(rows: any[], column: DataTableColumn | null, direction: DataTableSortOrder) {
  var multiplier = direction === 'asc' ? 1 : -1;
  var decorated: Array<{ index: number; row: any; value?: any }>;

  if (!column) {
    return rows.slice(0);
  }

  decorated = rows.map(function(row: any, index: number) {
    return {
      index: index,
      row: row,
      value: column && !column.sortFunction
        ? resolveSelectorValue(row, column, index)
        : undefined
    };
  });

  decorated.sort(function(left, right) {
    var comparison: number;

    if (column && column.sortFunction) {
      comparison = column.sortFunction(left.row, right.row) * multiplier;
    } else {
      comparison = compareUnknown(left.value, right.value) * multiplier;
    }

    return comparison || left.index - right.index;
  });

  return decorated.map(function(entry) {
    return entry.row;
  });
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
