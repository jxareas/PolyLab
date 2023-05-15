import { Component, Input } from "@angular/core";
import { LayoutService } from "../layout/layout.service";

@Component({
  selector: 'mds-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input({required : true}) imageLocation: string;

  constructor(public layoutService: LayoutService) { }

}
