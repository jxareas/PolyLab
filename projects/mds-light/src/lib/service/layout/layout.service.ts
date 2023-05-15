import { Injectable } from '@angular/core';
import {
  ConfigurationState,
  DefaultConfigurationState,
} from './state/ConfigurationState';
import { DefaultLayoutState } from './state/LayoutState';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  configurationState = DefaultConfigurationState;

  layoutState = DefaultLayoutState;

  private configUpdate = new Subject<ConfigurationState>();

  private overlayOpen = new Subject<any>();

  configUpdate$ = this.configUpdate.asObservable();

  overlayOpen$ = this.overlayOpen.asObservable();
  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.overlayMenuActive = !this.layoutState.overlayMenuActive;
      if (this.layoutState.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }

    if (this.isDesktop()) {
      this.layoutState.staticMenuDesktopInactive =
        !this.layoutState.staticMenuDesktopInactive;
    } else {
      this.layoutState.staticMenuMobileActive =
        !this.layoutState.staticMenuMobileActive;

      if (this.layoutState.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }

  showProfileSidebar() {
    this.layoutState.profileSidebarVisible =
      !this.layoutState.profileSidebarVisible;
    if (this.layoutState.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }

  showConfigSidebar() {
    this.layoutState.configSidebarVisible = true;
  }

  isOverlay() {
    return this.configurationState.menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  onConfigUpdate() {
    this.configUpdate.next(this.configurationState);
  }
}
