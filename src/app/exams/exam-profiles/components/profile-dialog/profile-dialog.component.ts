import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { catchError, switchMap, throwError } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { ExamProfileService } from "../../service/exam-profile.service";
import { LabelService } from "mds-light";
import { Profile } from "../../model/profile";
import { AddOrEditProfileForm, DefaultAddOrEditProfileForm } from "./model/add-or-edit-profile-form";

@Component({
  selector: 'jx-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.sass']
})
export class ProfileDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) profile: Profile;
  profileDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  profileForm: FormGroup<AddOrEditProfileForm>;

  constructor(
    private fb: FormBuilder,
    private profileService: ExamProfileService,
    private messageService: MessageService,
    protected labelService: LabelService
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.profileForm = DefaultAddOrEditProfileForm;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profileForm?.reset();
    if (changes['profile'] && this.isEditMode) {
      this.populateForm();
    }
  }

  private populateForm() {
    this.profileForm?.patchValue({
      profileId: this.profile.profileId,
      description: this.profile.description,
      status: this.profile.status,
    });
  }

  saveOrEditProfile(): void {
    if (this.isEditMode) {
      this.updateProfile();
    } else {
      this.saveProfile();
    }
  }

  saveProfile() {
    if (this.profileForm.valid) {
      const countryData = this.profileForm.value as Profile;
      this.profileService
        .save(countryData)
        .pipe(
          switchMap(() => this.profileService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.profileService.setChanges(data);
          this.displaySuccessMessage(`Added ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  updateProfile() {
    if (this.profileForm.valid) {
      const countryData = this.profileForm.value as Profile;
      // eslint-disable-next-line
      this.profileService.update(countryData.profileId as number, countryData)
        .pipe(
          switchMap(() => this.profileService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.profileService.setChanges(data);
          this.displaySuccessMessage(`Updated ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  private displaySuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the profile.',
      life: 3000,
    });
  }

  openDialog(): void {
    this.profileDialog = true;
  }

  hideDialog(): void {
    this.profileDialog = false;
  }
}
