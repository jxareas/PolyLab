import { Component, Input } from '@angular/core';

@Component({
  selector: 'mds-page-header-locator',
  templateUrl: './mds-page-header-locator.component.html',
  styles: [],
})
export class MdsPageHeaderLocatorComponent {
  @Input({ required: true }) topSection: string;

  @Input({ required: true }) selectedOption: string;
}
