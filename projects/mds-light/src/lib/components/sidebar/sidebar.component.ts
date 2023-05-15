import { Component, ElementRef } from "@angular/core";
import { LayoutService } from "../layout/layout.service";
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'mds-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [MenuComponent]
})
export class SidebarComponent {

  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
