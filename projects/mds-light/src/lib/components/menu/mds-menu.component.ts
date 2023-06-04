import { Component, Input } from "@angular/core";
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-menu',
  templateUrl: './mds-menu.component.html',
  styleUrls: ['./mds-menu.component.scss'],
})
export class MdsMenuComponent  {
  @Input({required : true}) model: any[] = [];

  constructor(public layoutService: LayoutService) {}

}
