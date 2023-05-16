import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BannerComponent } from './banner/banner.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaComponent } from './cta/cta.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SolutionsComponent,
    PricingComponent,
    CtaComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, RippleModule],
})
export class HomeModule {}
