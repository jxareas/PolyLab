import { FormControl } from "@angular/forms";

export interface AddOrEditReligionForm {
  religionId: FormControl<number | null>;
  description: FormControl<string | null>;
}
