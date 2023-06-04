import { Component } from "@angular/core";
import { Gender } from "../../model/gender";
import { MdsTableComponent } from "mds-light";

@Component({
  selector: 'jx-gender-table',
  templateUrl: './gender-table.component.html',
  styleUrls: ['./gender-table.component.scss']
})
export class GenderTableComponent extends MdsTableComponent<Gender> {
  // genders: Gender[] = [];
  // cols: any[] = [];
  // rowsPerPageOptions = [5, 10, 20];
  // private _selectedGenres: Gender[];
  // @Output() readonly selectedGenderChange = new EventEmitter<Gender[]>();
  // @Output() readonly editGenderAction = new EventEmitter<Gender>();
  // @Output() readonly deleteGenderAction = new EventEmitter<Gender>();
  //
  // constructor(private labelService : LabelService) {
  //
  // }
  //
  // get selectedGenres(): Gender[] {
  //   return this._selectedGenres;
  // }
  //
  // set selectedGenres(value: Gender[]) {
  //   this._selectedGenres = value;
  //   this.selectedGenderChange.emit(value);
  // }
  //
  // getColor = (countryStatus: number) =>
  //   this.labelService.getColor(countryStatus);
  //
  // getLabel = (countryStatus: number) =>
  //   this.labelService.getTag(countryStatus);
  //
  // onGlobalFilter(table: Table, event: Event): void {
  //   table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  // }

}
