import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangeNotifier } from "../../reactive/change-notifier";

@Injectable({ providedIn: 'root' })
export abstract class PersistentService<T> extends ChangeNotifier<T> {
  protected constructor(
    protected http: HttpClient,
    @Inject('url') protected url: string,
  ) {
    super();
  }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/all`);
  }

  findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  save(t: T) {
    return this.http.post(this.url, t);
  }

  update(id: number, t: T) {
    return this.http.put(`${this.url}/${id}`, t);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
