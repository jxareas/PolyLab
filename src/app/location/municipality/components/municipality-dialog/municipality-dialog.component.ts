import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Municipality } from "../../model/municipality";
import { AddOrEditMunicipalityForm } from "./model/add-or-edit-municipality-form";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MunicipalityService } from "../../service/municipality.service";
import { MessageService } from "primeng/api";
import { LabelService } from "mds-light";
import { catchError, switchMap, throwError } from "rxjs";
import { DepartmentService } from "../../../department/service/department.service";

@Component({
  selector: 'jx-municipality-dialog',
  templateUrl: './municipality-dialog.component.html',
  styleUrls: ['./municipality-dialog.component.sass']
})
export class MunicipalityDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) municipality: Municipality;
  municipalityDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  departments: any[] = [];
  municipalityForm: FormGroup<AddOrEditMunicipalityForm>;

  constructor(
    private fb: FormBuilder,
    private municipalityService: MunicipalityService,
    private departmentService: DepartmentService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.municipalityForm = this.fb.group<AddOrEditMunicipalityForm>({
      municipalityId: new FormControl<number | null>(null),
      departmentId: new FormControl<number | null>(null, [Validators.required]),
      description: new FormControl<string | null>(null, [Validators.required]),
      status: new FormControl<number>(1, { nonNullable: true })
    });
    this.departmentService.findAll().subscribe(
      (departments) => {
        this.departments = departments.map((department) => ({
          label: department.description,
          value: department.departmentId,
        }));
      },
      () => {
        this.displayErrorMessage('Unable to fetch department data.');
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.municipalityForm.reset();
    if (changes['municipality'] && this.isEditMode) {
      this.populateForm();
    }
  }

  saveOrEditMunicipality(): void {
    if (this.isEditMode) {
      this.updateMunicipality();
    } else {
      this.saveMunicipality();
    }
  }

  private populateForm() {
    this.municipalityForm.patchValue({
      municipalityId: this.municipality.municipalityId,
      departmentId: this.municipality.departmentId,
      description: this.municipality.description,
      status: this.municipality.status
    });
  }

  saveMunicipality() {
    if (this.municipalityForm.valid) {
      const municipalityData = this.municipalityForm.value as Municipality;
      this.municipalityService
        .save(municipalityData)
        .pipe(
          switchMap(() => this.municipalityService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.municipalityService.setChanges(data);
          this.displaySuccessMessage(`Added ${municipalityData.description}`);
          this.hideDialog();
        });
    }
  }

  updateMunicipality() {
    if (this.municipalityForm.valid) {
      const municipalityData = this.municipalityForm.value as Municipality;
      this.municipalityService
        // eslint-disable-next-line
        .update(municipalityData.municipalityId as number, municipalityData)
        .pipe(
          switchMap(() => this.municipalityService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.municipalityService.setChanges(data);
          this.displaySuccessMessage(`Updated ${municipalityData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(message?: string): void {
    const errorMessage = message ||'An error occurred while saving the municipality.';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 3000
    });
  }

  private displaySuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000
    });
  }

  openDialog(): void {
    this.municipalityDialog = true;
  }

  hideDialog(): void {
    this.municipalityDialog = false;
  }
}
