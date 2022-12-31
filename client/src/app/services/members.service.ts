import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMember } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private basrUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.basrUrl + 'users');
  }

  getMember(username: string | null): Observable<IMember> {
    return this.http.get<IMember>(`${this.basrUrl}users/${username}`)
  }
}
