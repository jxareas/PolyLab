import { Component, EventEmitter, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { LabelService } from '../../service/labels/label.service';

@Component({
  selector: 'mds-table',
  template: '',
})
export class MdsTableComponent<T> {
  public items: T[] = [];
  public cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];
  private _selectedItems: T[];

  @Output() public readonly selectedItemsChange = new EventEmitter<T[]>();
  @Output() public readonly editItemAction = new EventEmitter<T>();
  @Output() public readonly deleteItemAction = new EventEmitter<T>();

  constructor(private labelService: LabelService) {}

  get selectedItems(): T[] {
    return this._selectedItems;
  }

  set selectedItems(value: T[]) {
    this._selectedItems = value;
    this.selectedItemsChange.emit(value);
  }

  public colorOf = (status: number) => this.labelService.getColor(status);

  public labelOf = (status: number) => this.labelService.getTag(status);

  public onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
