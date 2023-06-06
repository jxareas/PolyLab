export interface Doctor {
  doctorId?: number;
  professionId?: number;
  creationUserId?: number;
  deletionUserId?: number;
  modificationUserId?: number;
  creationDate?: string;
  modificationDate?: string;
  deletionDate?: string;
  residenceMunicipalityId?: number;
  birthMunicipalityId?: number;
  birthDepartmentId?: number;
  residenceDepartmentId?: number;
  birthCountryId?: number;
  residenceCountryId?: number;
  identificationTypeId?: number;
  maritalStatusId?: number;
  genderId?: number;
  nationalityId?: number;
  identificationNumber?: string;
  inssNumber?: string;
  minsaCode?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  secondLastName?: string;
  birthDate?: Date;
  ageAtEntry?: string;
  email?: string;
  homeAddress?: string;
  homePhone?: string;
  mobilePhone?: string;
  contractDate?: Date;
  photoUrl?: string;
  active?: string;
  status?: number;
}

