import { Component } from "@angular/core";
import { drawerMenu } from "./drawer-state";

@Component({
  selector: 'jx-drawer',
  templateUrl: './drawer.component.html',
  styles: [
  ]
})
export class DrawerComponent {
  model: any[] = drawerMenu;
}
