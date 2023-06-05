import { Component, OnInit } from '@angular/core';
import { Profession } from '../../model/profession';
import { LabelService, MdsTableComponent } from 'mds-light';
import { ProfessionService } from '../../service/profession.service';

@Component({
  selector: 'jx-profession-table',
  templateUrl: './profession-table.component.html',
  styleUrls: ['./profession-table.component.scss'],
})
export class ProfessionTableComponent
  extends MdsTableComponent<Profession>
  implements OnInit
{
  constructor(
    private professionService: ProfessionService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.professionService.getChanges().subscribe(data => (this.items = data));
    this.professionService.findAll().subscribe(data => (this.items = data));
  }
}
