import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-header',
  templateUrl: './mds-header.component.html',
  styleUrls: ['./mds-header.component.scss'],
})
export class MdsHeaderComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  redirectToGithubRepository(): void {
    window.open('https://github.com/jxareas/polylab', '_blank');
  }
}
