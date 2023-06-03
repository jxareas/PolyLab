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
import { MdsOfferModule, MdsPageHeaderLocatorModule } from "mds-light";
import { ExclusiveOfferComponent } from './exclusive-offer/exclusive-offer.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SolutionsComponent,
    PricingComponent,
    CtaComponent,
    ExclusiveOfferComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    MdsOfferModule,
    MdsPageHeaderLocatorModule,
  ],
})
export class HomeModule {}
