import {RowId, RowElement} from './interface';

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowId): void;
export declare function updateRow(rowId: RowId, row: RowElement): number;