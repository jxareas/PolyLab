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

  getColor(status: number): string {
    return status === 1
      ? 'instock'
      : status === 2
        ? 'outofstock'
        : status === 3
          ? 'lowstock'
          : 'instock';
  }

  getTag(status: number): string {
    return status === 1
      ? 'enabled'
      : status === 3
        ? 'modified'
        : status === 2
          ? 'disabled'
          : 'unknown';
  }

}
