import { Component } from '@angular/core';
import { MdsTableComponent } from "mds-light";
import { Municipality } from "../../model/municipality";

@Component({
  selector: 'jx-municipality-table',
  templateUrl: './municipality-table.component.html',
  styleUrls: ['./municipality-table.component.sass']
})
export class MunicipalityTableComponent extends MdsTableComponent<Municipality> {

}
