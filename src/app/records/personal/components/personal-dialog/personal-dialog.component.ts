import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Doctor } from '../../model/doctor';
import { AddOrEditDoctorForm } from './model/add-or-edit-doctor-form';
import { MessageService } from 'primeng/api';
import { LabelService } from 'mds-light';
import { DoctorService } from '../../service/doctor.service';
import { CountryService } from "../../../../location/country/service/country.service";
import { DepartmentService } from "../../../../location/department/service/department.service";
import { MunicipalityService } from "../../../../location/municipality/service/municipality.service";
import { ProfessionService } from "../../../../categories/profession/service/profession.service";
import { catchError, switchMap, throwError } from "rxjs";

@Component({
  selector: 'jx-personal-dialog',
  templateUrl: './personal-dialog.component.html',
  styleUrls: ['./personal-dialog.component.sass'],
})
export class PersonalDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) doctor: Doctor;
  doctorDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  municipalities: any[] = [];
  countries: any[] = [];
  departments: any[] = [];
  professions: any[] = [];
  doctorForm: FormGroup<AddOrEditDoctorForm>;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private countryService: CountryService,
    private departmentService: DepartmentService,
    private municipalityService: MunicipalityService,
    private professionService: ProfessionService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.doctorForm = new FormGroup<AddOrEditDoctorForm>({
      doctorId: new FormControl<number | null>(null),
      professionId: new FormControl<number | null>(null),
      residenceMunicipalityId: new FormControl<number | null>(null),
      birthMunicipalityId: new FormControl<number | null>(null),
      birthDepartmentId: new FormControl<number | null>(null),
      residenceDepartmentId: new FormControl<number | null>(null),
      birthCountryId: new FormControl<number | null>(null),
      residenceCountryId: new FormControl<number | null>(null),
      identificationTypeId: new FormControl<number>(1, {nonNullable : true}),
      maritalStatusId: new FormControl<number>(1, {nonNullable : true}),
      genderId: new FormControl<number>(1, {nonNullable : true}),
      nationalityId: new FormControl<number>(1, {nonNullable : true}),
      identificationNumber: new FormControl<string | null>(null),
      inssNumber: new FormControl<string | null>(null),
      minsaCode: new FormControl<string | null>(null),
      firstName: new FormControl<string | null>(null),
      middleName: new FormControl<string | null>(null),
      lastName: new FormControl<string | null>(null),
      secondLastName: new FormControl<string | null>(null),
      birthDate: new FormControl<Date | null>(null),
      ageAtEntry: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      homeAddress: new FormControl<string | null>(null),
      homePhone: new FormControl<string | null>(null),
      mobilePhone: new FormControl<string | null>(null),
      contractDate: new FormControl<Date | null>(null),
      active: new FormControl<string>('1', {nonNullable : true}),
      status: new FormControl<number>(1, { nonNullable: true }),
    });
    this.countryService.findAll().subscribe(
      (countries) => {
        this.countries = countries.map((country) => ({
          label: country.description,
          value: country.countryId
        }));
      }
    );
    this.municipalityService.findAll().subscribe(
      (municipalities) => {
        this.municipalities = municipalities.map((municipality) => ({
          label: municipality.description,
          value: municipality.municipalityId
        }));
      }
    );
    this.departmentService.findAll().subscribe(
      (departments) => {
        this.departments = departments.map((department) => ({
          label: department.description,
          value: department.departmentId,
        }));
      }
    )
    this.professionService.findAll().subscribe(
      (professions) => {
        this.professions = professions.map((profession) => ({
          label: profession.description,
          value: profession.professionId
        }));
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.doctorForm?.reset();
    if (changes['doctor'] && this.isEditMode) {
      this.populateForm();
    }
  }

  private populateForm() {
    this.doctorForm?.patchValue({
      doctorId: this.doctor.doctorId,
      professionId: this.doctor.professionId,
      residenceMunicipalityId: this.doctor.residenceMunicipalityId,
      birthMunicipalityId: this.doctor.birthMunicipalityId,
      birthDepartmentId: this.doctor.birthDepartmentId,
      residenceDepartmentId: this.doctor.residenceDepartmentId,
      birthCountryId: this.doctor.birthCountryId,
      residenceCountryId: this.doctor.residenceCountryId,
      identificationTypeId: this.doctor.identificationTypeId,
      maritalStatusId: this.doctor.maritalStatusId,
      genderId: this.doctor.genderId,
      nationalityId: this.doctor.nationalityId,
      identificationNumber: this.doctor.identificationNumber,
      inssNumber: this.doctor.inssNumber,
      minsaCode: this.doctor.minsaCode,
      firstName: this.doctor.firstName,
      middleName: this.doctor.middleName,
      lastName: this.doctor.lastName,
      secondLastName: this.doctor.secondLastName,
      birthDate: this.doctor.birthDate,
      ageAtEntry: this.doctor.ageAtEntry,
      email: this.doctor.email,
      homeAddress: this.doctor.homeAddress,
      homePhone: this.doctor.homePhone,
      mobilePhone: this.doctor.mobilePhone,
      contractDate: this.doctor.contractDate,
      active: this.doctor.active,
      status: this.doctor.status,
    });
  }

  saveOrEditDoctor(): void {
    if (this.isEditMode) {
      this.updateDoctor();
    } else {
      this.saveDoctor();
    }
  }

  updateDoctor() {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value as Doctor;
      this.doctorService
        // eslint-disable-next-line
        .update(doctorData.doctorId as number, doctorData)
        .pipe(
          switchMap(() => this.doctorService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.doctorService.setChanges(data);
          this.displaySuccessMessage(`Updated ${doctorData.lastName}`);
          this.hideDialog();
        });
    }
  }

  saveDoctor() {
    if (this.doctorForm.valid) {
      const doctorData = this.doctorForm.value as Doctor;
      this.doctorService
        .save(doctorData)
        .pipe(
          switchMap(() => this.doctorService.findAll()),
          catchError((error) => {
            this.displayErrorMessage(error.message);
            console.log(error.message)
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.doctorService.setChanges(data);
          this.displaySuccessMessage(`Added ${doctorData.lastName}`);
          this.hideDialog();
        });
    }
  }

  private displaySuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }

  private displayErrorMessage(message?: string): void {
    const errorMessage = message || 'An error occurred while saving the doctor.';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5_000,
    });
  }

  openDialog(): void {
    this.doctorDialog = true;
  }

  hideDialog(): void {
    this.doctorDialog = false;
  }
}
