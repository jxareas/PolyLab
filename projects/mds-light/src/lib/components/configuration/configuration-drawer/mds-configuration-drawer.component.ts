/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import { Component, Input } from '@angular/core';
import { LayoutService } from '../../../service/layout/layout.service';

@Component({
  selector: 'mds-configuration-drawer',
  templateUrl: './mds-configuration-drawer.component.html',
  styleUrls: [],
})
export class MdsConfigurationDrawerComponent {
  @Input() minimal = false;

  scales: number[] = [12, 13, 14, 15, 16];

  constructor(public layoutService: LayoutService) {}

  get visible(): boolean {
    return this.layoutService.layoutState.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.layoutState.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.configurationState.scale;
  }

  set scale(_val: number) {
    this.layoutService.configurationState.scale = _val;
  }

  get menuMode(): string {
    return this.layoutService.configurationState.menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.configurationState.menuMode = _val;
  }

  get inputStyle(): string {
    return this.layoutService.configurationState.inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.configurationState.inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.configurationState.ripple;
  }

  set ripple(_val: boolean) {
    this.layoutService.configurationState.ripple = _val;
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  changeTheme(theme: string, colorScheme: string) {
    const themeLink = document.getElementById('theme-css') as HTMLLinkElement;
    const newHref = themeLink
      .getAttribute('href')!
      .replace(this.layoutService.configurationState.theme, theme);
    this.layoutService.configurationState.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.configurationState.theme = theme;
      this.layoutService.configurationState.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  replaceThemeLink(href: string, onComplete: Function) {
    const id = 'theme-css';
    const themeLink = document.getElementById('theme-css') as HTMLLinkElement;
    const cloneLinkElement = themeLink.cloneNode(true) as HTMLLinkElement;

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  applyScale() {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    document.documentElement.style.fontSize = this.scale + 'px';
  }
}
