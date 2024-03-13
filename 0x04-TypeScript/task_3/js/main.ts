/// <reference path="./crud.d.ts" />
import { RowElement, RowId} from './interface';

import CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowId = CRUD.insertRow(row);
row.age = 25;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
