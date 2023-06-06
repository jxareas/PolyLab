import { FormControl, FormGroup } from "@angular/forms";

export interface AddOrEditPatientForm {
  patientId?: FormControl<number | null>;
  identificationId: FormControl<number | null>;
  identificationNumber: FormControl<string | null>;
  fileNumber: FormControl<number | null>;
  inssNumber?: FormControl<string | null>;
  maritalStatusId: FormControl<number | null>;
  email?: FormControl<string | null>;
  genderId: FormControl<number | null>;
  nationalityId: FormControl<number | null>;
  countryBornInId: FormControl<number | null>;
  departmentBornInId: FormControl<number | null>;
  municipalityBornInId: FormControl<number | null>;
  countryResidenceId: FormControl<number | null>;
  departmentResidenceId: FormControl<number | null>;
  municipalityResidenceId: FormControl<number | null>;
  bloodTypeId: FormControl<number | null>;
  professionId: FormControl<number | null>;
  religionId: FormControl<number | null>;
  firstName: FormControl<string | null>;
  secondName?: FormControl<string | null>;
  firstSurname: FormControl<string | null>;
  secondSurname?: FormControl<string | null>;
  dateOfBirth: FormControl<Date | null>;
  homeAddress: FormControl<string | null>;
  homePhone?: FormControl<string | null>;
  mobilePhone?: FormControl<string | null>;
  active?: FormControl<string | null>;
  pregnant?: FormControl<string | null>;
  deceased?: FormControl<string | null>;
  status?: FormControl<number | null>;
}

export const DefaultAddOrEditPatientForm = new FormGroup<AddOrEditPatientForm>({
  patientId: new FormControl<number | null>(null),
  identificationId: new FormControl<number>(1, {nonNullable : true}),
  maritalStatusId: new FormControl<number>(1, {nonNullable : true}),
  genderId: new FormControl<number>(1, {nonNullable : true}),
  nationalityId: new FormControl<number>(1, {nonNullable : true}),
  bloodTypeId: new FormControl<number>(1, {nonNullable : true}),
  countryBornInId: new FormControl<number | null>(null),
  departmentBornInId: new FormControl<number | null>(null),
  municipalityBornInId: new FormControl<number | null>(null),
  countryResidenceId: new FormControl<number | null>(null),
  departmentResidenceId: new FormControl<number | null>(null),
  municipalityResidenceId: new FormControl<number | null>(null),
  professionId: new FormControl<number | null>(null),
  religionId: new FormControl<number | null>(null),
  firstName: new FormControl<string | null>(null),
  secondName: new FormControl<string | null>(null),
  firstSurname: new FormControl<string | null>(null),
  secondSurname: new FormControl<string | null>(null),
  email: new FormControl<string | null>(null),
  identificationNumber: new FormControl<string | null>(null),
  fileNumber: new FormControl<number | null>(null),
  inssNumber: new FormControl<string | null>(null),
  homePhone: new FormControl<string | null>(null),
  mobilePhone: new FormControl<string | null>(null),
  dateOfBirth: new FormControl<Date | null>(null),
  homeAddress: new FormControl<string | null>(null),
  active: new FormControl<string>('1', {nonNullable : true}),
  pregnant: new FormControl<string>('1', {nonNullable : true}),
  deceased: new FormControl<string>('0', {nonNullable : true}),
  status: new FormControl<number>(1, {nonNullable : true}),
})
