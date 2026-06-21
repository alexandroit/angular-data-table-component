import { DataTableColumn, DataTableSortOrder } from './types';
export declare function clamp(value: number, min: number, max: number): number;
export declare function resolveSelectorValue(row: any, column: DataTableColumn, rowIndex: number): any;
export declare function resolveCellValue(row: any, column: DataTableColumn, rowIndex: number): any;
export declare function toCellText(value: any): string;
export declare function styleObjectToString(style: {
    [key: string]: string | number;
} | null | undefined): string;
export declare function sortRows(rows: any[], column: DataTableColumn | null, direction: DataTableSortOrder): any[];
