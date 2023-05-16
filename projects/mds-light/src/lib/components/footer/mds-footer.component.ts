import { Component, Input } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-footer',
  templateUrl: './mds-footer.component.html',
  styleUrls: ['./mds-footer.component.scss'],
})
export class MdsFooterComponent {
  @Input({ required: true }) imageLocation: string;

  constructor(public layoutService: LayoutService) {}
}
