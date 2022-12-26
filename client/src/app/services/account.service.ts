import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUser } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5001/api/";
  private currentUserSource = new BehaviorSubject<IUser>(null);
  readonly currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(uri: string = "account/login", model: any) {
    return this.http.post<IUser>(`${this.baseUrl}${uri}`, model)
      .pipe(
        map((response: IUser) => {
          const user = response;
          this.setUserLSAndNotify(user);
        })
      );
  }

  private setUserLSAndNotify(user: IUser) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUserSource.next(user);
    }
  }

  register(model: any): Observable<any> {
    return this.http.post<IUser>(`${this.baseUrl}account/register`, model).pipe(
      map(user => {
        this.setUserLSAndNotify(user);
        return user;
      })
    );
  }

  setCurrentUser(user: IUser) {
    this.currentUserSource.next(user);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
