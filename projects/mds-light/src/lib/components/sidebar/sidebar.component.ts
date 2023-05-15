import { Component, ElementRef } from "@angular/core";
import { LayoutService } from "../layout/layout.service";

@Component({
  selector: 'mds-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
