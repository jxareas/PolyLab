import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';

@Component({
  selector: 'mds-menu',
  templateUrl: './mds-menu.component.html',
  styleUrls: ['./mds-menu.component.scss'],
})
export class MdsMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Main',
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/dashboard'],
          },
        ],
      },
      {
        label: 'Management',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Records',
            icon: 'pi pi-fw pi-table',
            items: [
              {
                label: 'Patients',
                icon: 'pi pi-user',
                routerLink: ['/records/patients'],
              },
              {
                label: 'Personal',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/records/doctors'],
              },
            ],
          },
          {
            label: 'Location',
            icon: 'pi pi-fw pi-compass',
            items: [
              {
                label: 'Country',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/location/country'],
              },
              {
                label: 'Department',
                icon: 'pi pi-map',
                routerLink: ['/location/department'],
              },
              {
                label: 'Municipality',
                icon: 'pi pi-flag',
                routerLink: ['/location/municipality'],
              },
            ],
          },
          {
            label: 'Exams',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Exams',
                icon: 'pi pi-fw pi-file-o',
                routerLink: ['/exam/exam'],
              },
              {
                label: 'Exam Profiles',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/exam/exam-profile'],
              },
              {
                label: 'Normal Values',
                icon: 'pi pi-pencil',
                routerLink: ['/exam/normal-values'],
              },
            ],
          },
          {
            label: 'Security',
            icon: 'pi pi-fw pi-lock',
            items: [
              {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login'],
              },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error'],
              },
              {
                label: 'Access Denied',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access'],
              },
            ],
          },
          {
            label: 'Profession',
            icon: 'pi pi-briefcase',
            routerLink: ['/profession'],
          },
          {
            label: 'Gender',
            icon: 'pi pi-tags',
            routerLink: ['/gender'],
          },
          {
            label: 'Education Level',
            icon: 'pi pi-folder-open',
            routerLink: ['/education'],
          },
          {
            label: 'Religion',
            icon: 'pi pi-folder-open',
            routerLink: ['/religion'],
          },
          // {
          //   label: 'Resources',
          //   icon: 'pi pi-fw pi-globe',
          //   routerLink: ['/landing'],
          // },
          // {
          //   label: 'Users',
          //   icon: 'pi pi-fw pi-user',
          //   routerLink: ['/users'],
          // },
          // {
          //   label: 'Crud',
          //   icon: 'pi pi-fw pi-pencil',
          //   routerLink: ['/pages/crud'],
          // },
          // {
          //   label: 'Timeline',
          //   icon: 'pi pi-fw pi-calendar',
          //   routerLink: ['/pages/timeline'],
          // },
          // {
          //   label: 'Not Found',
          //   icon: 'pi pi-fw pi-exclamation-circle',
          //   routerLink: ['/notfound'],
          // },
          // {
          //   label: 'Empty',
          //   icon: 'pi pi-fw pi-circle-off',
          //   routerLink: ['/pages/empty'],
          // },
        ],
      },
      {
        label: 'General Info',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/documentation'],
          },
          {
            label: 'License',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/license'],
          },
          {
            label: 'About',
            icon: 'pi pi-fw pi-question',
            routerLink: ['/about'],
          },
          {
            label: 'View Source',
            icon: 'pi pi-fw pi-external-link',
            url: ['https://github.com/jxareas/PolyLab'],
            target: '_blank',
          },
        ],
      },
      // {
      //   label: 'UI Components',
      //   items: [
      //     { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
      //     { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
      //     { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
      //     { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
      //     { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
      //     { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
      //     { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
      //     { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
      //     { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
      //     { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
      //     { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
      //     { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
      //     { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
      //     { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
      //     { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
      //     { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
      //   ]
      // },
      // {
      //   label: 'Prime Blocks',
      //   items: [
      //     { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
      //     { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
      //   ]
      // },
      {
        label: 'Design System',
        items: [
          {
            label: 'Icons',
            icon: 'pi pi-fw pi-prime',
            routerLink: ['/design/icons'],
          },
          {
            label: 'Layout',
            icon: 'pi pi-fw pi-desktop',
            routerLink: ['/design/layout'],
          },
        ],
      },
      // {
      //   label: 'Hierarchy',
      //   items: [
      //     {
      //       label: 'Submenu 1',
      //       icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 1.1',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
      //           ],
      //         },
      //         {
      //           label: 'Submenu 1.2',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       label: 'Submenu 2',
      //       icon: 'pi pi-fw pi-bookmark',
      //       items: [
      //         {
      //           label: 'Submenu 2.1',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
      //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
      //           ],
      //         },
      //         {
      //           label: 'Submenu 2.2',
      //           icon: 'pi pi-fw pi-bookmark',
      //           items: [
      //             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];
  }
}
