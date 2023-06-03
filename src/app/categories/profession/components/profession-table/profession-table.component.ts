import { Component } from '@angular/core';
import { Profession } from "../../model/profession";
import { MdsTableComponent } from "mds-light";

@Component({
  selector: 'jx-profession-table',
  templateUrl: './profession-table.component.html',
  styleUrls: ['./profession-table.component.scss']
})
export class ProfessionTableComponent extends MdsTableComponent<Profession> {

}
