import { FormControl } from "@angular/forms";

export interface AddOrEditProfessionForm {
  professionId: FormControl<number | null>;
  description: FormControl<string | null>;
  status: FormControl<number>;
}
