import { Component, ViewChild } from "@angular/core";
import { Doctor } from "./model/doctor";
import { DoctorService } from "./service/doctor.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { PersonalDialogComponent } from "./components/personal-dialog/personal-dialog.component";
import { MdsDeleteSingleComponent } from "mds-light";

@Component({
  selector: 'jx-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.sass']
})
export class PersonalComponent {
  @ViewChild("doctorDialog") doctorDialog: PersonalDialogComponent;
  @ViewChild("deleteDoctorDialog") deleteDialog: MdsDeleteSingleComponent;

  deleteDoctorDialog = false;
  doctor: Doctor = {};

  constructor(
    private doctorService: DoctorService,
    private messageService: MessageService
  ) {}

  openNewDoctorDialog() {
    this.doctor = {};
    this.doctorDialog.isEditMode = false;
    this.doctorDialog.openDialog();
  }

  openEditDoctorDialog(doctor: Doctor): void {
    this.doctor = doctor;
    this.doctorDialog.isEditMode = true;
    this.doctorDialog.openDialog();
  }

  openDeleteDoctorDialog(doctor: Doctor): void {
    this.doctor = doctor;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteDoctorDialog = false;
    if (this.doctor.doctorId != null) {
      this.doctorService
        .delete(this.doctor.doctorId)
        .pipe(
          switchMap(() => this.doctorService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.doctorService.setChanges(data);
          this.displayDeleteMessage(this.doctor.firstName);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: `${itemName || "Doctor"} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while deleting the doctor.",
      life: 3000
    });
  }
}
