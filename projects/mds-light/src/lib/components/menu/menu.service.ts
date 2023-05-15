import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { OnMenuChangeEvent } from "./event/OnMenuChangeEvent";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSource = new Subject<OnMenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(event: OnMenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
