import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface AddOrEditExamForm {
  examId: FormControl<number | null>;
  labAreaId: FormControl<number | null>;
  methodologyId: FormControl<number | null>;
  examCategoryId: FormControl<number | null>;
  sampleTypeId: FormControl<number | null>;
  measurementUnitId: FormControl<number | null>;
  resultTypeId: FormControl<number | null>;
  description: FormControl<string | null>;
  shortDescription: FormControl<string | null>;
  lisCode: FormControl<string | null>;
  count: FormControl<string | null>;
  confidential: FormControl<string | null>;
  calculated: FormControl<string | null>;
  status: FormControl<number | null>;
}

export const DefaultAddOrEditExamForm = new FormGroup<AddOrEditExamForm>({
  examId: new FormControl<number | null>(1, {nonNullable : true}),
  labAreaId: new FormControl<number>(1, {nonNullable : true}),
  methodologyId: new FormControl<number>(1, {nonNullable : true}),
  examCategoryId: new FormControl<number>(1, {nonNullable : true}),
  sampleTypeId: new FormControl<number>(1, {nonNullable : true}),
  measurementUnitId: new FormControl<number>(1, {nonNullable : true}),
  resultTypeId: new FormControl<number>(1, {nonNullable : true}),
  description: new FormControl<string | null>(null, [Validators.minLength(3), Validators.maxLength(50)]),
  shortDescription: new FormControl<string | null>(null, [Validators.minLength(3), Validators.maxLength(15)]),
  lisCode: new FormControl<string | null>(null, [Validators.minLength(2), Validators.maxLength(10)]),
  count: new FormControl<string | null>(null, [Validators.minLength(1), Validators.maxLength(1)]),
  confidential: new FormControl<string | null>(null, [Validators.minLength(1), Validators.maxLength(1)]),
  calculated: new FormControl<string | null>(null, [Validators.minLength(1), Validators.maxLength(1)]),
  status: new FormControl<number | null>(1, {nonNullable : true}),
});
