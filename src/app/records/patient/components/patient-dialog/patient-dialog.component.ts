import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Patient } from '../../model/patient';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../../../../location/country/service/country.service';
import { DepartmentService } from '../../../../location/department/service/department.service';
import { MunicipalityService } from '../../../../location/municipality/service/municipality.service';
import { ProfessionService } from '../../../../categories/profession/service/profession.service';
import { MessageService } from 'primeng/api';
import { LabelService } from 'mds-light';
import { ReligionService } from '../../../../categories/religion/service/religion.service';
import { PatientService } from '../../service/patient.service';
import { catchError, switchMap, throwError } from "rxjs";
import { AddOrEditPatientForm, DefaultAddOrEditPatientForm } from "./model/add-or-edit-patient-form";

@Component({
  selector: 'jx-patient-dialog',
  templateUrl: './patient-dialog.component.html',
  styleUrls: ['./patient-dialog.component.scss'],
})
export class PatientDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) patient: Patient;
  patientDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  municipalities: any[] = [];
  countries: any[] = [];
  departments: any[] = [];
  professions: any[] = [];
  religions: any[] = [];
  patientForm: FormGroup<AddOrEditPatientForm>;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private countryService: CountryService,
    private departmentService: DepartmentService,
    private municipalityService: MunicipalityService,
    private professionService: ProfessionService,
    private religionService: ReligionService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
    this.patientForm = DefaultAddOrEditPatientForm;
    this.countryService.findAll().subscribe(countries => {
      this.countries = countries.map(country => ({
        label: country.description,
        value: country.countryId,
      }));
    });
    this.municipalityService.findAll().subscribe(municipalities => {
      this.municipalities = municipalities.map(municipality => ({
        label: municipality.description,
        value: municipality.municipalityId,
      }));
    });
    this.departmentService.findAll().subscribe(departments => {
      this.departments = departments.map(department => ({
        label: department.description,
        value: department.departmentId,
      }));
    });
    this.professionService.findAll().subscribe(professions => {
      this.professions = professions.map(profession => ({
        label: profession.description,
        value: profession.professionId,
      }));
    });
    this.religionService.findAll().subscribe(religions => {
      this.religions = religions.map(religion => ({
        label: religion.description,
        value: religion.religionId,
      }));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.patientForm?.reset();
    if (changes['patient'] && this.isEditMode) {
      this.populateForm();
    }
  }

  private populateForm() {
    console.log(`This is my date: ${this.patient.dateOfBirth}`)
    this.patientForm?.patchValue({
      patientId: this.patient.patientId,
      identificationId: this.patient.identificationId,
      identificationNumber: this.patient.identificationNumber,
      fileNumber: this.patient.fileNumber,
      inssNumber: this.patient.inssNumber,
      maritalStatusId: this.patient.maritalStatusId,
      email: this.patient.email,
      genderId: this.patient.genderId,
      nationalityId: this.patient.nationalityId,
      countryBornInId: this.patient.countryBornInId,
      departmentBornInId: this.patient.departmentBornInId,
      municipalityBornInId: this.patient.municipalityBornInId,
      countryResidenceId: this.patient.countryResidenceId,
      departmentResidenceId: this.patient.departmentResidenceId,
      municipalityResidenceId: this.patient.municipalityResidenceId,
      bloodTypeId: this.patient.bloodTypeId,
      professionId: this.patient.professionId,
      religionId: this.patient.religionId,
      firstName: this.patient.firstName,
      secondName: this.patient.secondName,
      firstSurname: this.patient.firstSurname,
      secondSurname: this.patient.secondSurname,
      dateOfBirth: this.patient.dateOfBirth,
      homeAddress: this.patient.homeAddress,
      homePhone: this.patient.homePhone,
      mobilePhone: this.patient.mobilePhone,
      active: this.patient.active,
      pregnant: this.patient.pregnant,
      deceased: this.patient.deceased,
      status: this.patient.status,
    });
  }

  saveOrEditPatient(): void {
    if (this.isEditMode) {
      this.updatePatient();
    } else {
      this.savePatient();
    }
  }

  updatePatient() {
    if (this.patientForm.valid) {
      const patientData = this.patientForm.value as Patient;
      this.patientService
        // eslint-disable-next-line
        .update(patientData.patientId as number, patientData)
        .pipe(
          switchMap(() => this.patientService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.patientService.setChanges(data);
          this.displaySuccessMessage(`Updated ${patientData.firstName} ${patientData.firstSurname}`);
          this.hideDialog();
        });
    }
  }

  savePatient() {
    if (this.patientForm.valid) {
      const patientData = this.patientForm.value as Patient;
      this.patientService
        .save(patientData)
        .pipe(
          switchMap(() => this.patientService.findAll()),
          catchError((error) => {
            this.displayErrorMessage(error.message);
            console.log(error.message)
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.patientService.setChanges(data);
          this.displaySuccessMessage(`Added ${patientData.firstName} ${patientData.firstSurname}`);
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
    const errorMessage = message || 'An error occurred while saving the patient.';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5_000,
    });
  }

  openDialog(): void {
    this.patientDialog = true;
  }

  hideDialog(): void {
    this.patientDialog = false;
  }


}
