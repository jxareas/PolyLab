import { Component, Input } from '@angular/core';

@Component({
  selector: 'mds-exclusive-offer',
  templateUrl: './mds-offer.component.html',
  styles: [],
})
export class MdsOfferComponent {
  @Input({ required: true }) title: string;

  @Input({ required: true }) description: string;

  @Input({ required: true }) redirectionUrl: string;
}
