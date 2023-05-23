import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class IconService {
  constructor(private http: HttpClient) {}

  icons!: any[];

  selectedIcon: any;

  iconsLocation = 'assets/demo/data/icons.json';

  getIcons() {
    return this.http.get(this.iconsLocation).pipe(
      map((response: any) => {
        this.icons = response.icons;
        return this.icons;
      }),
    );
  }
}
