import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mds-delete-single',
  templateUrl: './mds-delete-single.component.html',
  styles: [],
})
export class MdsDeleteSingleComponent {
  @Input({ required: true }) itemName: string;
  visible = false;
  @Output() readonly confirmAction: EventEmitter<string> = new EventEmitter<string>();

  openDialog(): void {
    this.visible = true;
  }

  closeDialog(): void {
    this.visible = false;
  }
}
