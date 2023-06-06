import { FormControl } from "@angular/forms";

export interface AddOrEditMunicipalityForm {
  municipalityId: FormControl<number | null>;
  departmentId: FormControl<number | null>;
  description: FormControl<string | null>;
  status: FormControl<number>;
}
