import { Component, ElementRef, Input } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-drawer',
  templateUrl: './mds-drawer.component.html',
  styleUrls: ['./mds-drawer.component.scss'],
})
export class MdsDrawerComponent {
  @Input({ required: true }) model: any[];
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
