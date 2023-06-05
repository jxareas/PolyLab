import { Component, ViewChild } from "@angular/core";
import { Gender } from "./model/gender";
import { GenderDialogComponent } from "./components/gender-dialog/gender-dialog.component";
import { Country } from "../../location/country/model/country";
import { MdsDeleteSingleComponent } from "mds-light";
import { catchError, switchMap, throwError } from "rxjs";
import { MessageService } from "primeng/api";
import { GenderService } from "./service/gender.service";

@Component({
  selector: 'jx-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {
  @ViewChild('genderDialog') genderDialog: GenderDialogComponent;
  @ViewChild('deleteGenderDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteGenderDialog = false;
  deleteGendersDialog = false;
  gender: Gender = {};
  selectedGenres: Gender[] = [];

  constructor(
    private genderService: GenderService,
    private messageService: MessageService,
  ) {}

  openNewGenderDialog() {
    this.gender = {};
    this.genderDialog.isEditMode = false;
    this.genderDialog.openDialog();
  }

  openEditGenreDialog(gender: Gender): void {
    this.gender = gender;
    this.genderDialog.isEditMode = true;
    this.genderDialog.openDialog();
  }

  openDeleteGenreDialog(country: Country): void {
    this.gender = country;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteGenderDialog = false;
    if (this.gender.genderId != null) {
      this.genderService
        .delete(this.gender.genderId)
        .pipe(
          switchMap(() => this.genderService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.genderService.setChanges(data);
          this.displayDeleteMessage(this.gender.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: `${itemName || "Gender"} Deleted`,
      life: 3_000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while deleting the gender.",
      life: 3_000
    });
  }

}
