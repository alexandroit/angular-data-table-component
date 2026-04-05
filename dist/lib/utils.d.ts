import { DataTableColumn, DataTableSortOrder } from './types';
export declare function clamp(value: number, min: number, max: number): number;
export declare function resolveSelectorValue<T>(row: T, column: DataTableColumn<T>, rowIndex: number): unknown;
export declare function resolveCellValue<T>(row: T, column: DataTableColumn<T>, rowIndex: number): unknown;
export declare function toCellText(value: unknown): string;
export declare function styleObjectToString(style: Record<string, string | number | null | undefined>): string;
export declare function sortRows<T>(rows: T[], column: DataTableColumn<T> | null, direction: DataTableSortOrder): T[];
