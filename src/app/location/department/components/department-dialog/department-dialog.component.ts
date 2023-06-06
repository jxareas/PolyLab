import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { DepartmentService } from "../../service/department.service";
import { Department } from "../../model/department";
import { AddOrEditDepartmentForm } from "./model/add-or-edit-department-form";
import { MessageService } from "primeng/api";
import { LabelService } from "mds-light";
import { catchError, switchMap, throwError } from "rxjs";
import { CountryService } from "../../../country/service/country.service";

@Component({
  selector: 'jx-department-dialog',
  templateUrl: './department-dialog.component.html',
  styleUrls: ['./department-dialog.component.sass']
})
export class DepartmentDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) department: Department;
  departmentDialog = false;
  isEditMode = false;
  statuses: any[];
  countries: any[] = [];
  submitted = false;
  departmentForm: FormGroup<AddOrEditDepartmentForm>;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private countryService: CountryService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.departmentForm = this.fb.group<AddOrEditDepartmentForm>({
      departmentId: new FormControl<number | null>(null),
      countryId: new FormControl<number | null>(null, [Validators.required]),
      description: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      status : new FormControl<number>(1, {nonNullable: true})
    });
    this.countryService.findAll().subscribe(
      (countries) => {
        this.countries = countries.map((country) => ({
          label: country.description,
          value: country.countryId
        }));
      },
      () => {
        this.displayErrorMessage('Unable to fetch country data.');
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.departmentForm.reset();
    if (changes['department'] && this.isEditMode) {
      this.populateForm();
    }
  }

  saveOrEditDepartment(): void {
    if (this.isEditMode) {
      this.updateDepartment();
    } else {
      this.saveDepartment();
    }
  }

  private populateForm() {
    this.departmentForm.patchValue({
      departmentId: this.department.departmentId,
      countryId: this.department.countryId,
      description: this.department.description,
      status: this.department.status,
    });
  }

  saveDepartment() {
    if (this.departmentForm.valid) {
      const departmentData = this.departmentForm.value as Department;
      this.departmentService
        .save(departmentData)
        .pipe(
          switchMap(() => this.departmentService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.departmentService.setChanges(data);
          this.displaySuccessMessage(`Added ${departmentData.description}`);
          this.hideDialog();
        });
    }
  }

  updateDepartment() {
    if (this.departmentForm.valid) {
      const departmentData = this.departmentForm.value as Department;
      this.departmentService
        // eslint-disable-next-line
        .update(departmentData.departmentId as number, departmentData)
        .pipe(
          switchMap(() => this.departmentService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.departmentService.setChanges(data);
          this.displaySuccessMessage(`Updated ${departmentData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(message?: string): void {
    const errorMessage = message || 'An error occurred while saving the department.';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5_000,
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
    this.departmentDialog = true;
  }

  hideDialog(): void {
    this.departmentDialog = false;
  }

}
