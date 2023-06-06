import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface AddOrEditNormalValues {
  normalValuesId: FormControl<number | null>;
  examId: FormControl<number | null>;
  genderId: FormControl<number | null>;
  highRange: FormControl<number | null>;
  lowRange: FormControl<number | null>;
  status: FormControl<number | null>;
}

export const DefaultAddOrEditNormalValues =
  new FormGroup<AddOrEditNormalValues>({
    normalValuesId: new FormControl<number | null>(null),
    examId: new FormControl<number | null>(null),
    genderId: new FormControl<number | null>(null),
    highRange: new FormControl<number | null>(null, Validators.required),
    lowRange: new FormControl<number | null>(null, Validators.required),
    status: new FormControl<number | null>(1, { nonNullable: true }),
  });
