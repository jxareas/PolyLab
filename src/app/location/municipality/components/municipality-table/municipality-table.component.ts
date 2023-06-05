import { Component, OnInit } from '@angular/core';
import { LabelService, MdsTableComponent } from 'mds-light';
import { Municipality } from '../../model/municipality';
import { MunicipalityService } from '../../service/municipality.service';

@Component({
  selector: 'jx-municipality-table',
  templateUrl: './municipality-table.component.html',
  styleUrls: ['./municipality-table.component.sass'],
})
export class MunicipalityTableComponent
  extends MdsTableComponent<Municipality>
  implements OnInit
{
  constructor(
    private municipalityService: MunicipalityService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.municipalityService
      .getChanges()
      .subscribe(data => (this.items = data));
    this.municipalityService.findAll().subscribe(data => (this.items = data));
  }
}
