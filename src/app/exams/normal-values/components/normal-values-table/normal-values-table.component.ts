import { Component, OnInit } from "@angular/core";
import { LabelService, MdsTableComponent } from "mds-light";
import { NormalValues } from '../../model/normal-values';
import { NormalValuesService } from "../../service/normal-values.service";

@Component({
  selector: 'jx-normal-values-table',
  templateUrl: './normal-values-table.component.html',
  styleUrls: ['./normal-values-table.component.scss'],
})
export class NormalValuesTableComponent extends MdsTableComponent<NormalValues> implements OnInit {

  constructor(
    private normalValuesService: NormalValuesService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit(): void {
    this.normalValuesService.getChanges().subscribe(data => (this.items = data));
    this.normalValuesService.findAll().subscribe(data => (this.items = data));
  }
}
