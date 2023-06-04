import { Component } from '@angular/core';
import { MdsTableComponent } from 'mds-light';
import { NormalValues } from '../../model/normal-values';

@Component({
  selector: 'jx-normal-values-table',
  templateUrl: './normal-values-table.component.html',
  styleUrls: ['./normal-values-table.component.scss'],
})
export class NormalValuesTableComponent extends MdsTableComponent<NormalValues> {


}
