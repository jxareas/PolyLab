import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './panel/layout/layout.component';
import { MdsNotFoundComponent } from '../../projects/mds-light/src/lib/components/not-found/mds-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), },
      { path: 'design', loadChildren: () => import('./design/design.module').then(m => m.DesignModule), },
      { path: 'documentation', loadChildren: () => import('./project/documentation/documentation.module').then(m => m.DocumentationModule,), },
      { path: 'license', loadChildren: () => import('./project/license/license.module').then(m => m.LicenseModule), },
    ],
  },
  { path: 'not-found', component: MdsNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

const navigationExtras: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, navigationExtras)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
