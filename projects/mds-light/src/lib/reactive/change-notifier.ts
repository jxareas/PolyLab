import { Observable, Subject } from 'rxjs';

export abstract class ChangeNotifier<T> {
  public changes = new Subject<T[]>();

  public setChanges(data: T[]): void {
    this.changes.next(data);
  }

  public getChanges(): Observable<T[]> {
    return this.changes.asObservable();
  }
}
