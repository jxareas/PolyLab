import { FormControl } from "@angular/forms";

export interface AddOrEditDoctorForm {
  doctorId?: FormControl<number | null>;
  professionId?: FormControl<number | null>;
  residenceMunicipalityId?: FormControl<number | null>;
  birthMunicipalityId?: FormControl<number | null>;
  birthDepartmentId?: FormControl<number | null>;
  residenceDepartmentId?: FormControl<number | null>;
  birthCountryId?: FormControl<number | null>;
  residenceCountryId?: FormControl<number | null>;
  identificationTypeId?: FormControl<number | null>;
  maritalStatusId?: FormControl<number | null>;
  genderId?: FormControl<number | null>;
  nationalityId?: FormControl<number | null>;
  identificationNumber?: FormControl<string | null>;
  inssNumber?: FormControl<string | null>;
  minsaCode?: FormControl<string | null>;
  firstName?: FormControl<string | null>;
  middleName?: FormControl<string | null>;
  lastName?: FormControl<string | null>;
  secondLastName?: FormControl<string | null>;
  birthDate?: FormControl<Date | null>;
  ageAtEntry?: FormControl<string | null>;
  email?: FormControl<string | null>;
  homeAddress?: FormControl<string | null>;
  homePhone?: FormControl<string | null>;
  mobilePhone?: FormControl<string | null>;
  contractDate?: FormControl<Date | null>;
  active?: FormControl<string | null>;
  status?: FormControl<number | null>;
}
