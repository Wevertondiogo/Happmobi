import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { Pagination } from './core/models/pagination.model';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  public getPaginations(): Observable<Pagination[]> {
    return this.http.get<Pagination[]>(this.baseUrl + 'paginations').pipe(first());
  }
}
