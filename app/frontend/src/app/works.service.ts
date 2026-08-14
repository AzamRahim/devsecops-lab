import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Work {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class WorksService {
  constructor(private http: HttpClient) {}

  getWorks(): Observable<Work[]> {
    return this.http.get<Work[]>('/api/works');
  }
}
