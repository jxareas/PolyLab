export const drawerMenu = [
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
        routerLink: ['/category/profession'],
      },
      {
        label: 'Gender',
        icon: 'pi pi-tags',
        routerLink: ['/category/gender'],
      },
      {
        label: 'Religion',
        icon: 'pi pi-folder-open',
        routerLink: ['/category/religion'],
      },
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
  }
];
