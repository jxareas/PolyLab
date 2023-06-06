import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { LabelService } from "mds-light";
import { catchError, switchMap, throwError } from "rxjs";
import { Profession } from "../../model/profession";
import { AddOrEditProfessionForm } from "./model/add-or-edit-profession-form";
import { ProfessionService } from "../../service/profession.service";

@Component({
  selector: 'jx-profession-dialog',
  templateUrl: './profession-dialog.component.html',
  styleUrls: ['./profession-dialog.component.scss']
})
export class ProfessionDialogComponent implements OnInit, OnChanges {
  @Input({required : true}) profession: Profession;
  professionDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  professionForm: FormGroup<AddOrEditProfessionForm>;

  constructor(
    private fb: FormBuilder,
    private professionService: ProfessionService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.professionForm  = new FormGroup<AddOrEditProfessionForm>({
      professionId: new FormControl<number | null>(null),
      description: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      status: new FormControl<number>(1, {nonNullable: true}),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.professionForm.reset()
    if (changes['profession'] && this.isEditMode) {
      this.populateForm();
    }
  }

  saveOrEditProfession(): void {
    if (this.isEditMode) {
      this.updateProfession();
    } else this.saveProfession();
  }

  private populateForm() {
    this.professionForm?.patchValue({
      professionId: this.profession.professionId,
      description: this.profession.description,
      status: this.profession.status,
    });
  }

  saveProfession() {
    if (this.professionForm.valid) {
      const professionData = this.professionForm.value as Profession;
      this.professionService
        .save(professionData)
        .pipe(
          switchMap(() => this.professionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.professionService.setChanges(data);
          this.displaySuccessMessage(`Added ${professionData.description}`);
          this.hideDialog();
        });
    }
  }

  updateProfession() {
    if (this.professionForm.valid) {
      const profession = this.professionForm.value as Profession;
      // eslint-disable-next-line
      this.professionService.update(profession.professionId as number, profession)
        .pipe(
          switchMap(() => this.professionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.professionService.setChanges(data);
          this.displaySuccessMessage(`Updated ${profession.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the profession.',
      life: 3000,
    });
  }

  private displaySuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }

  openDialog(): void {
    this.professionDialog = true;
  }

  hideDialog(): void {
    this.professionDialog = false;
  }
}
