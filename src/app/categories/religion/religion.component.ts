import { Component, ViewChild } from "@angular/core";
import { MdsDeleteSingleComponent } from "mds-light";
import { Religion } from "./model/religion";
import { ReligionDialogComponent } from "./components/religion-dialog/religion-dialog.component";
import { catchError, switchMap, throwError } from "rxjs";
import { ReligionService } from "./service/religion.service";
import { MessageService } from "primeng/api";

@Component({
  selector: 'jx-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss']
})
export class ReligionComponent  {
  @ViewChild('religionDialog') religionDialog: ReligionDialogComponent;
  @ViewChild('deleteReligionDialog') deleteDialog: MdsDeleteSingleComponent;
  religion: Religion = {};
  deleteReligionDialog = false;

  constructor(private religionService: ReligionService, private messageService: MessageService) {

  }
  openNewReligionDialog() {
    this.religion = {};
    this.religionDialog.isEditMode = false;
    this.religionDialog.openDialog();
  }

  openEditReligionDialog(religion: Religion) {
    this.religion = religion;
    this.religionDialog.isEditMode = true;
    this.religionDialog.openDialog();
  }

  openDeleteReligionDialog(religion: Religion): void {
    this.religion = religion;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteReligionDialog = false;
    if (this.religion.religionId != null) {
      this.religionService
        .delete(this.religion.religionId)
        .pipe(
          switchMap(() => this.religionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.religionService.setChanges(data);
          this.displayDeleteMessage(this.religion.description);
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
