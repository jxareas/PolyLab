import { Component, ViewChild } from "@angular/core";
import { Department } from "./model/department";
import { DepartmentService } from "./service/department.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { DepartmentDialogComponent } from "./components/department-dialog/department-dialog.component";
import { MdsDeleteSingleComponent } from "mds-light";

@Component({
  selector: 'jx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass']
})
export class DepartmentComponent {
  @ViewChild('departmentDialog') departmentDialog: DepartmentDialogComponent;
  @ViewChild('deleteDepartmentDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteDepartmentDialog = false;
  department: Department = {};

  constructor(
    private departmentService: DepartmentService,
    private messageService: MessageService,
  ) {}

  openNewDepartmentDialog() {
    this.department = {};
    this.departmentDialog.isEditMode = false;
    this.departmentDialog.openDialog();
  }

  openEditDepartmentDialog(department: Department): void {
    this.department = department;
    this.departmentDialog.isEditMode = true;
    this.departmentDialog.openDialog();
  }

  openDeleteDepartmentDialog(department: Department): void {
    this.department = department;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteDepartmentDialog = false;
    if (this.department.departmentId != null) {
      this.departmentService
        .delete(this.department.departmentId)
        .pipe(
          switchMap(() => this.departmentService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.departmentService.setChanges(data);
          this.displayDeleteMessage(this.department.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Successful',
      detail: `${itemName || 'Department'} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while deleting the department.',
      life: 3000
    });
  }
}
