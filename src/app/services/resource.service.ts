import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourcesResponse } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'https://dev-hub-geek.vercel.app/api/resources';

  constructor(private http: HttpClient) { }

  getResources(): Observable<ResourcesResponse> {
    return this.http.get<ResourcesResponse>(this.apiUrl);
  }
}
