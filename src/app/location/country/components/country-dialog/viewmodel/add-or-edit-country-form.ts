import { FormControl } from "@angular/forms";

export interface AddOrEditCountryForm {
  countryId: FormControl<number | null>;
  description: FormControl<string | null>;
  status: FormControl<number>;
}
