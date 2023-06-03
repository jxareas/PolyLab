import { Component } from '@angular/core';
import { Gender } from "./model/gender";

@Component({
  selector: 'jx-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {

  genders: Gender[] = [];

}
