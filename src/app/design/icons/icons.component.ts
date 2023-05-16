import { Component, OnInit } from '@angular/core';
import { IconService } from '../../../../projects/mds-light/src/lib/service/icons/icon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'jx-icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {
  icons: any[] = [];

  filteredIcons: any[] = [];

  selectedIcon: any;

  searchTerm: string | null;

  constructor(
    private iconService: IconService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      this.searchTerm = queryParams.get('search');

      this.iconService.getIcons().subscribe(data => {
        const isNotDeprecated = (value: any) =>
          value.icon.tags.indexOf('deprecate') === -1;
        const isPresentInSearch = (value: any) =>
          value.icon.tags.some((tag: string) =>
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            tag.includes(this.searchTerm as string),
          );

        data = data.filter(isNotDeprecated);

        if (this.searchTerm) {
          data = data.filter(isPresentInSearch);
        }

        const icons = data;
        icons.sort((icon1, icon2) => {
          if (icon1.properties.name < icon2.properties.name) return -1;
          else if (icon1.properties.name > icon2.properties.name) return 1;
          else return 0;
        });

        this.icons = icons;
        this.filteredIcons = data;
      });
    });
  }

  onFilter(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value;

    const queryParams = searchText ? { search: searchText } : undefined;
    this.router.navigate([], { queryParams }).then(() => void {});

    if (!searchText) {
      this.filteredIcons = this.icons;
    } else {
      this.filteredIcons = this.icons.filter(it => {
        return it.icon.tags[0].includes(searchText);
      });
    }
  }
}
