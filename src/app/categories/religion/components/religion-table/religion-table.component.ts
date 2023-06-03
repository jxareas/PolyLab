import { Component } from '@angular/core';
import { Religion } from "../../model/religion";
import { MdsTableComponent } from "mds-light";

@Component({
  selector: 'jx-religion-table',
  templateUrl: './religion-table.component.html',
  styleUrls: ['./religion-table.component.scss']
})
export class ReligionTableComponent extends MdsTableComponent<Religion> {

}
