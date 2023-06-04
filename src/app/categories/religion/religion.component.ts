import { Component } from '@angular/core';
import { MdsTableComponent } from "mds-light";
import { Religion } from "./model/religion";

@Component({
  selector: 'jx-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.scss']
})
export class ReligionComponent extends MdsTableComponent<Religion> {

}
