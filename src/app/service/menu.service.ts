import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private dataUrl = 'assets/data/menu-en.json';

  constructor(private http: HttpClient) {}

  getMenyData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
