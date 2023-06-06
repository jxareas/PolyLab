import { Component, ViewChild } from "@angular/core";
import { Exam } from "./model/exam";
import { ExamService } from "./service/exam.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { MdsDeleteSingleComponent } from "mds-light";
import { ExamDialogComponent } from "./components/exam-dialog/exam-dialog.component";

@Component({
  selector: 'jx-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.sass']
})
export class ExamComponent {
  @ViewChild('examDialog') examDialog: ExamDialogComponent;
  @ViewChild('deleteExamDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteExamDialog = false;
  deleteExamsDialog = false;
  exam: Exam = {};
  selectedExams: Exam[] = [];

  constructor(
    private examService: ExamService,
    private messageService: MessageService,
  ) {}

  openNewExamDialog() {
    this.exam = {};
    this.examDialog.isEditMode = false;
    this.examDialog.openDialog();
  }

  openEditExamDialog(exam: Exam): void {
    this.exam = exam;
    this.examDialog.isEditMode = true;
    this.examDialog.openDialog();
  }

  openDeleteExamDialog(exam: Exam): void {
    this.exam = exam;
    this.deleteDialog.openDialog();
  }

  confirmDelete(): void {
    this.deleteExamDialog = false;
    if (this.exam.examId != null) {
      this.examService
        .delete(this.exam.examId)
        .pipe(
          switchMap(() => this.examService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.examService.setChanges(data);
          this.displayDeleteMessage(this.exam.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: "info",
      summary: "Successful",
      detail: `${itemName || "Exam"} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while deleting the exam.",
      life: 3000
    });
  }
}
