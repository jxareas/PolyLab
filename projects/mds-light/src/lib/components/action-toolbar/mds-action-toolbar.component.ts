import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mds-action-toolbar',
  templateUrl: './mds-action-toolbar.component.html',
  styles: [],
})
export class MdsActionToolbarComponent {
  @Input({ required: true }) deleteDisabled: boolean;
  @Output() readonly newAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() readonly deleteAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() readonly exportAction: EventEmitter<void> = new EventEmitter<void>();

  openNew = () => this.newAction.emit();

  deleteSelected = (): void => this.deleteAction.emit();
  exportCsv = (): void => this.exportAction.emit();
}
