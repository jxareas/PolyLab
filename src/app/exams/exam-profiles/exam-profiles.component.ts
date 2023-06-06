import { Component, ViewChild } from "@angular/core";
import { Profile } from "./model/profile";
import { ExamProfileService } from "./service/exam-profile.service";
import { MessageService } from "primeng/api";
import { catchError, switchMap, throwError } from "rxjs";
import { ProfileDialogComponent } from "./components/profile-dialog/profile-dialog.component";
import { MdsDeleteSingleComponent } from "mds-light";

@Component({
  selector: 'jx-exam-profiles',
  templateUrl: './exam-profiles.component.html',
  styleUrls: ['./exam-profiles.component.sass']
})
export class ExamProfilesComponent {
  @ViewChild('profileDialog') profileDialog: ProfileDialogComponent;
  @ViewChild('deleteProfileDialog') deleteDialog: MdsDeleteSingleComponent;

  deleteProfileDialog = false;
  deleteProfilesDialog = false;
  profile: Profile = {};
  selectedProfiles: Profile[] = [];

  constructor(
    private profileService: ExamProfileService,
    private messageService: MessageService
  ) {}

  handleSelectedProfilesChange(selectedProfiles: Profile[]): void {
    this.selectedProfiles = selectedProfiles;
  }

  confirmDelete(): void {
    this.deleteProfileDialog = false;
    if (this.profile.profileId != null) {
      this.profileService
        .delete(this.profile.profileId)
        .pipe(
          switchMap(() => this.profileService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.profileService.setChanges(data);
          this.displayDeleteMessage(this.profile.description);
          this.deleteDialog.closeDialog();
        });
    }
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Successful',
      detail: `${itemName || 'Profile'} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while deleting the profile.',
      life: 3000
    });
  }

  confirmDeleteSelected(): void {
    this.deleteProfilesDialog = false;
    // TODO: Delete all the selected profiles
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Profiles Deleted',
      life: 3000,
    });
    // TODO: Handle reset selected profiles to empty
    // this.selectedProfiles = [];
  }

  openNewProfileDialog() {
    this.profile = {};
    this.profileDialog.isEditMode = false;
    this.profileDialog.openDialog();
  }

  openEditProfileDialog(profile: Profile): void {
    this.profile = profile;
    this.profileDialog.isEditMode = true;
    this.profileDialog.openDialog();
  }

  openDeleteProfileDialog(profile: Profile): void {
    this.profile = profile;
    this.deleteDialog.openDialog();
  }
}
