import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

export interface AddOrEditNormalValues {
  normalValuesId: FormControl<number | null>;
  examId: FormControl<number | null>;
  genderId: FormControl<number | null>;
  highRange: FormControl<number | null>;
  lowRange: FormControl<number | null>;
  status: FormControl<number | null>;
}

function highRangeGreaterThanLowRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const highRangeControl = control.get('highRange');
  const lowRangeControl = control.get('lowRange');

  if (highRangeControl && lowRangeControl) {
    const highRange = highRangeControl.value;
    const lowRange = lowRangeControl.value;

    if (highRange !== null && lowRange !== null && highRange <= lowRange) {
      return { highRangeLessThanOrEqualLowRange: true };
    }
  }

  return null;
}

export const DefaultAddOrEditNormalValues =
  new FormGroup<AddOrEditNormalValues>({
    normalValuesId: new FormControl<number | null>(null),
    examId: new FormControl<number | null>(null),
    genderId: new FormControl<number | null>(null),
    highRange: new FormControl<number | null>(null, Validators.required),
    lowRange: new FormControl<number | null>(null, Validators.required),
    status: new FormControl<number | null>(1, { nonNullable: true }),
  },  { validators: highRangeGreaterThanLowRangeValidator });
