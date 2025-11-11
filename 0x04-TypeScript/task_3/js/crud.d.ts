import { RowElement, RowID } from "./interface";

function insertRow(row: RowElement): RowID {}

function updateRow(rowId: RowID, row: RowElement): void {}

function deleteRow(rowId: RowID): number {}
