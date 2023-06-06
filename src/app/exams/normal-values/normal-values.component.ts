import { Component, ViewChild } from "@angular/core";
import { NormalValues } from "./model/normal-values";
import { NormalValuesService } from "./service/normal-values.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { NormalValuesDialogComponent } from "./components/normal-values-dialog/normal-values-dialog.component";
import { MdsDeleteSingleComponent } from "mds-light";

@Component({
  selector: 'jx-normal-values',
  templateUrl: './normal-values.component.html',
  styleUrls: ['./normal-values.component.sass']
})
export class NormalValuesComponent {
  @ViewChild('normalValuesDialog') normalValuesDialog: NormalValuesDialogComponent;
  @ViewChild('deleteNormalValuesDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteNormalValuesDialog = false;
  deleteNormalValuesDialogs = false;
  normalValues: NormalValues = {};
  selectedNormalValues: NormalValues[] = [];

  constructor(
    private normalValuesService: NormalValuesService,
    private messageService: MessageService,
  ) {}

  openNewNormalValuesDialog() {
    this.normalValues = {};
    this.normalValuesDialog.isEditMode = false;
    this.normalValuesDialog.openDialog();
  }

  openEditNormalValuesDialog(normalValues: NormalValues): void {
    this.normalValues = normalValues;
    this.normalValuesDialog.isEditMode = true;
    this.normalValuesDialog.openDialog();
  }

  openDeleteNormalValuesDialog(normalValues: NormalValues): void {
    this.normalValues = normalValues;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteNormalValuesDialog = false;
    if (this.normalValues.normalValuesId != null) {
      this.normalValuesService
        .delete(this.normalValues.normalValuesId)
        .pipe(
          switchMap(() => this.normalValuesService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.normalValuesService.setChanges(data);
          this.displayDeleteMessage();
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: `${itemName || 'Normal Values'} Deleted`,
      life: 3000,
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while deleting the normal values.',
      life: 3000,
    });
  }
}
