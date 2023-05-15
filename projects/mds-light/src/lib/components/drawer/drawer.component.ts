import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
