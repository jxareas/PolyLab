import { Component, OnInit } from "@angular/core";
import { Gender } from "../../model/gender";
import { LabelService, MdsTableComponent } from "mds-light";
import { GenderService } from "../../service/gender.service";

@Component({
  selector: 'jx-gender-table',
  templateUrl: './gender-table.component.html',
  styleUrls: ['./gender-table.component.scss']
})
export class GenderTableComponent extends MdsTableComponent<Gender> implements OnInit {
  constructor(
    private genderService: GenderService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit(): void {
    this.genderService.getChanges().subscribe(data => (this.items = data));
    this.genderService.findAll().subscribe(data => (this.items = data));
  }

}
