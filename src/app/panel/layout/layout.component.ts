import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { LayoutService } from '../../../../projects/mds-light/src/lib/service/layout/layout.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MdsHeaderComponent } from '../../../../projects/mds-light/src/lib/components/header/mds-header.component';
import { MdsDrawerComponent } from '../../../../projects/mds-light/src/lib/components/drawer/mds-drawer.component';

@Component({
  selector: 'jx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(MdsDrawerComponent) appSidebar!: MdsDrawerComponent;

  @ViewChild(MdsHeaderComponent) appTopbar!: MdsHeaderComponent;

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,
  ) {
    this.overlayMenuOpenSubscription =
      this.layoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
          this.menuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            event => {
              const isOutsideClicked = !(
                this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                this.appSidebar.el.nativeElement.contains(event.target) ||
                this.appTopbar.menuButton.nativeElement.isSameNode(
                  event.target,
                ) ||
                this.appTopbar.menuButton.nativeElement.contains(event.target)
              );

              if (isOutsideClicked) {
                this.hideMenu();
              }
            },
          );
        }

        if (!this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            event => {
              const isOutsideClicked = !(
                this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
                this.appTopbar.menu.nativeElement.contains(event.target) ||
                this.appTopbar.topbarMenuButton.nativeElement.isSameNode(
                  event.target,
                ) ||
                this.appTopbar.topbarMenuButton.nativeElement.contains(
                  event.target,
                )
              );

              if (isOutsideClicked) {
                this.hideProfileMenu();
              }
            },
          );
        }

        if (this.layoutService.layoutState.staticMenuMobileActive) {
          this.blockBodyScroll();
        }
      });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();
        this.hideProfileMenu();
      });
  }

  hideMenu() {
    this.layoutService.layoutState.overlayMenuActive = false;
    this.layoutService.layoutState.staticMenuMobileActive = false;
    this.layoutService.layoutState.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.layoutService.layoutState.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
          'gi',
        ),
        ' ',
      );
    }
  }

  get containerClass() {
    return {
      'layout-theme-light':
        this.layoutService.configurationState.colorScheme === 'light',
      'layout-theme-dark':
        this.layoutService.configurationState.colorScheme === 'dark',
      'layout-overlay':
        this.layoutService.configurationState.menuMode === 'overlay',
      'layout-static':
        this.layoutService.configurationState.menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.layoutState.staticMenuDesktopInactive &&
        this.layoutService.configurationState.menuMode === 'static',
      'layout-overlay-active': this.layoutService.layoutState.overlayMenuActive,
      'layout-mobile-active':
        this.layoutService.layoutState.staticMenuMobileActive,
      'p-input-filled':
        this.layoutService.configurationState.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.configurationState.ripple,
    };
  }

  ngOnDestroy(): void {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
