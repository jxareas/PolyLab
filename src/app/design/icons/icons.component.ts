import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from "mds-light";

@Component({
  selector: 'jx-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
  icons: any[] = [];

  filteredIcons: any[] = [];

  selectedIcon: any;

  constructor(private iconService: IconService, private router: Router) {}

  ngOnInit(): void {
    this.iconService.getIcons().subscribe(data => {
      data = data.filter(value => {
        return value.icon.tags.indexOf('deprecate') === -1;
      });

      const icons = data;
      icons.sort((icon1, icon2) => {
        if (icon1.properties.name < icon2.properties.name)
          return -1;
        else
          return 0;
      });

      this.icons = icons;
      this.filteredIcons = data;
    });
  }

  onFilter(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value;

    if (!searchText) {
      this.filteredIcons = this.icons;
    } else {
      this.filteredIcons = this.icons.filter(it => {
        return it.icon.tags[0].includes(searchText);
      });
    }
  }
}
