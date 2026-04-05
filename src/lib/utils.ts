import { DataTableColumn, DataTableSortOrder } from './types';

function compareUnknown(left: unknown, right: unknown) {
  if (left == null && right == null) {
    return 0;
  }

  if (left == null) {
    return -1;
  }

  if (right == null) {
    return 1;
  }

  if (typeof left === 'number' && typeof right === 'number') {
    return left - right;
  }

  if (typeof left === 'boolean' && typeof right === 'boolean') {
    return Number(left) - Number(right);
  }

  return String(left).localeCompare(String(right), undefined, {
    numeric: true,
    sensitivity: 'base'
  });
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function resolveSelectorValue<T>(
  row: T,
  column: DataTableColumn<T>,
  rowIndex: number
) {
  if (!column.selector) {
    return null;
  }

  if (typeof column.selector === 'function') {
    return column.selector(row, rowIndex);
  }

  return (row as Record<string, unknown>)[column.selector as string];
}

export function resolveCellValue<T>(
  row: T,
  column: DataTableColumn<T>,
  rowIndex: number
) {
  if (column.format) {
    return column.format(row, rowIndex);
  }

  return resolveSelectorValue(row, column, rowIndex);
}

export function toCellText(value: unknown) {
  if (value == null) {
    return '';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export function styleObjectToString(style: Record<string, string | number | null | undefined>) {
  return Object.entries(style)
    .filter(([, value]) => value != null && value !== '')
    .map(([property, value]) => `${toKebabCase(property)}: ${String(value)}`)
    .join('; ');
}

export function sortRows<T>(
  rows: T[],
  column: DataTableColumn<T> | null,
  direction: DataTableSortOrder
) {
  if (!column) {
    return [...rows];
  }

  const multiplier = direction === 'asc' ? 1 : -1;

  return [...rows].sort((left, right) => {
    if (column.sortFunction) {
      return column.sortFunction(left, right) * multiplier;
    }

    const leftIndex = rows.indexOf(left);
    const rightIndex = rows.indexOf(right);

    return compareUnknown(
      resolveSelectorValue(left, column, leftIndex),
      resolveSelectorValue(right, column, rightIndex)
    ) * multiplier;
  });
}
