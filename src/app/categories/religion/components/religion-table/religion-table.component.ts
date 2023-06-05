import { Component, OnInit } from '@angular/core';
import { Religion } from '../../model/religion';
import { LabelService, MdsTableComponent } from 'mds-light';
import { ReligionService } from '../../service/religion.service';

@Component({
  selector: 'jx-religion-table',
  templateUrl: './religion-table.component.html',
  styleUrls: ['./religion-table.component.scss'],
})
export class ReligionTableComponent
  extends MdsTableComponent<Religion>
  implements OnInit
{
  constructor(
    private religionService: ReligionService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.religionService.getChanges().subscribe(data =>
      this.items = data
    );
    this.religionService.findAll().subscribe(data =>
      this.items = data
    )
  }

}
