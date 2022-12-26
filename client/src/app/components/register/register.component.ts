import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { IUser } from '../../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // private _userFromHomeComponent: IUser;

  // @Input()
  // get userFromHomeComponent() { return this._userFromHomeComponent };
  // set userFromHomeComponent(value) {
  //   this._userFromHomeComponent = value;
  // }
  @Output() cancelRegister = new EventEmitter<boolean>();

  model: IUser = {
    username: '',
    password: ''
  };

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(
      res => {
        this.cancel();
        console.log(res);
      });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
