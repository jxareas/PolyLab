import { Injectable } from '@angular/core';
import { LabelState } from "./state/label-state";

@Injectable()
export class LabelService {
  getDefaults(): LabelState[] {
    return [
      { label: 'ENABLED', value: 1 },
      { label: 'DISABLED', value: 2 },
      { label: 'MODIFIED', value: 3 },
    ];
  }

  getColor(countryStatus: number): string {
    return countryStatus === 1
      ? 'instock'
      : countryStatus === 2
        ? 'outofstock'
        : countryStatus === 3
          ? 'lowstock'
          : 'instock';
  }

  getTag(countryStatus: number): string {
    return countryStatus === 1
      ? 'enabled'
      : countryStatus === 3
        ? 'modified'
        : countryStatus === 2
          ? 'disabled'
          : 'unknown';
  }

}
