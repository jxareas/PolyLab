import { Component, ViewChild } from "@angular/core";
import { MdsDeleteSingleComponent } from "mds-light";
import { ProfessionDialogComponent } from "./components/profession-dialog/profession-dialog.component";
import { Profession } from "./model/profession";
import { catchError, switchMap, throwError } from "rxjs";
import { MessageService } from "primeng/api";
import { ProfessionService } from "./service/profession.service";

@Component({
  selector: 'jx-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent {
  @ViewChild('professionDialog') professionDialog: ProfessionDialogComponent;
  @ViewChild('deleteProfessionDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteProfessionDialog = false;
  profession: Profession = {};

  constructor(
    private professionService: ProfessionService,
    private messageService: MessageService,
  ) {}

  openNewProfessionDialog() {
    this.profession = {};
    this.professionDialog.isEditMode = false;
    this.professionDialog.openDialog();
  }

  openEditProfessionDialog(profession: Profession): void {
    this.profession = profession;
    this.professionDialog.isEditMode = true;
    this.professionDialog.openDialog();
  }

  openDeleteProfessionDialog(profession: Profession): void {
    this.profession = profession;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteProfessionDialog = false;
    if (this.profession.professionId != null) {
      this.professionService
        .delete(this.profession.professionId)
        .pipe(
          switchMap(() => this.professionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.professionService.setChanges(data);
          this.displayDeleteMessage(this.profession.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: `${itemName || "Profession"} Deleted`,
      life: 3_000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while deleting the profession.",
      life: 3_000
    });
  }
}
