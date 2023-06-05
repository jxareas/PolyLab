import { FormControl } from "@angular/forms";

export interface AddOrEditGenderForm {
  genderId: FormControl<number | null>;
  description: FormControl<string | null>;
}
