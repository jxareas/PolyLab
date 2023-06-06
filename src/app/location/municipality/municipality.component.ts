import { Component, ViewChild } from "@angular/core";
import { Municipality } from "./model/municipality";
import { MunicipalityService } from "./service/municipality.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { MdsDeleteSingleComponent } from "mds-light";
import { MunicipalityDialogComponent } from "./components/municipality-dialog/municipality-dialog.component";

@Component({
  selector: 'jx-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.sass']
})
export class MunicipalityComponent  {
  @ViewChild('municipalityDialog') municipalityDialog: MunicipalityDialogComponent;
  @ViewChild('deleteMunicipalityDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteMunicipalityDialog = false;
  municipality: Municipality = {};

  constructor(
    private municipalityService: MunicipalityService,
    private messageService: MessageService,
  ) {}

  openNewMunicipalityDialog() {
    this.municipality = {};
    this.municipalityDialog.isEditMode = false;
    this.municipalityDialog.openDialog();
  }

  openEditMunicipalityDialog(municipality: Municipality): void {
    this.municipality = municipality;
    this.municipalityDialog.isEditMode = true;
    this.municipalityDialog.openDialog();
  }

  openDeleteMunicipalityDialog(municipality: Municipality): void {
    this.municipality = municipality;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteMunicipalityDialog = false;
    if (this.municipality.municipalityId != null) {
      this.municipalityService
        .delete(this.municipality.municipalityId)
        .pipe(
          switchMap(() => this.municipalityService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.municipalityService.setChanges(data);
          this.displayDeleteMessage(this.municipality.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Successful',
      detail: `${itemName || 'Municipality'} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while deleting the municipality.',
      life: 3000
    });
  }
}
