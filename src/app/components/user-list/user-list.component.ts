import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private _userApiService: UserApiService) {}
  search!: string;
  userList: any;
  ngOnInit(): void {}
  getUsersByName() {
    this.userList = null;
    this._userApiService.getUsersByName(this.search).subscribe({
      next: (res) => {
        console.log('res:', res);
        this.userList = res;
        // this.submitted = true;
      },
      error: (e) => console.error('err:', e),
    });
  }
  getUsersByPinCode() {
    this.userList = null;
    this._userApiService.getUsersByPinCode(this.search).subscribe({
      next: (res) => {
        console.log('res:', res);
        this.userList = res;
        // this.submitted = true;
      },
      error: (e) => console.error('err:', e),
    });
  }
}
