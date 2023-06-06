import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface AddOrEditProfileForm {
  profileId: FormControl<number | null>;
  description: FormControl<string | null>;
  status: FormControl<number>;
}

export const DefaultAddOrEditProfileForm: FormGroup<AddOrEditProfileForm> =
  new FormGroup<AddOrEditProfileForm>({
  profileId: new FormControl<number | null>(null),
  description: new FormControl<string>('',
    [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
  status: new FormControl<number>(1, { nonNullable: true }),
});
