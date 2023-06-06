import { FormControl } from "@angular/forms";

export interface AddOrEditDepartmentForm   {
  departmentId: FormControl<number | null>;
  countryId: FormControl<number | null>;
  description: FormControl<string | null>;
  status: FormControl<number>;
}
