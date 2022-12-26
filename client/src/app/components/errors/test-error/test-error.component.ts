import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  private baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // 404
  getNotFoundError() {
    this.http.get(this.baseUrl + 'buggy/not-found')
      .subscribe(res => console.log(res));
  }

  // 400
  getBadRequestError() {
    this.http.get(this.baseUrl + 'buggy/bad-request')
      .subscribe(res => console.log(res));
  }

  // 500
  getServerError() {
    this.http.get(this.baseUrl + 'buggy/server-error')
      .subscribe(res => console.log(res));
  }

  // 401
  getAuthError() {
    this.http.get(this.baseUrl + 'buggy/auth')
      .subscribe(res => console.log(res));
  }

  // 400
  getRegisterError() {
    this.http.post(this.baseUrl + 'account/register', {})
      .subscribe(res => console.log(res), err => this.validationErrors = err);
  }
}
