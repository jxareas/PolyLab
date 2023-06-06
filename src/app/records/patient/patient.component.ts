import { Component, ViewChild } from "@angular/core";
import { Patient } from "./model/patient";
import { PatientService } from "./service/patient.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { MdsDeleteSingleComponent } from "mds-light";
import { PatientDialogComponent } from "./components/patient-dialog/patient-dialog.component";

@Component({
  selector: 'jx-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent {
  @ViewChild('patientDialog') patientDialog: PatientDialogComponent;
  @ViewChild('deletePatientDialog') deleteDialog: MdsDeleteSingleComponent;

  deletePatientDialog = false;
  patient: Patient = {};

  constructor(
    private patientService: PatientService,
    private messageService: MessageService
  ) {}

  openNewPatientDialog(): void {
    this.patient = {};
    this.patientDialog.isEditMode = false;
    this.patientDialog.openDialog();
  }

  openEditPatientDialog(patient: Patient): void {
    this.patient = patient;
    this.patientDialog.isEditMode = true;
    this.patientDialog.openDialog();
  }

  openDeletePatientDialog(patient: Patient): void {
    this.patient = patient;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deletePatientDialog = false;
    if (this.patient.patientId != null) {
      this.patientService
        .delete(this.patient.patientId)
        .pipe(
          switchMap(() => this.patientService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.patientService.setChanges(data);
          this.displayDeleteMessage(this.patient.firstName);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Successful',
      detail: `${itemName || 'Patient'} Deleted`,
      life: 3000,
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while deleting the patient.',
      life: 3000,
    });
  }

}
