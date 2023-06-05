import { FormControl } from "@angular/forms";

export interface AddOrEditCountryForm {
  description: FormControl<string | null>;
  status: FormControl<number>;
}
