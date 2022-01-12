import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _userApiService: UserApiService
  ) {}
  userForm!: FormGroup;
  userList: any;
  ngOnInit(): void {
    this.userForm = this._fb.group({
      // id: [''],
      // firstName: ['Amit', Validators.required],
      // lastName: ['Dubey', Validators.required],
      // email: ['amit@gmail.com', Validators.required],
      // dob: ['1993-09-11', Validators.required],
      // doj: ['2020-01-11', Validators.required],
      // city: ['Gurugram', Validators.required],
      // pinCode: ['122001', Validators.required],
      // enabled: [true],
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      doj: [''],
      city: [''],
      pinCode: [''],
      enabled: [true],
    });
    this.getUsers();
  }
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this._userApiService.saveUser(this.userForm.value).subscribe({
      next: (res) => {
        console.log('res:', res);
        this.getUsers();
        this.userForm.reset();
      },
      error: (e) => console.error('err:', e),
    });
  }
  getUsersByOrder() {
    this._userApiService.getUsersByOrder().subscribe({
      next: (res) => {
        console.log('res:', res);
        this.userList = res;
      },
      error: (e) => console.error('err:', e),
    });
  }
  getUsers() {
    this._userApiService.getUsers().subscribe({
      next: (res) => {
        console.log('res:', res);
        this.userList = res;
      },
      error: (e) => console.error('err:', e),
    });
  }
  setUser(user: any) {
    this.userForm.setValue(user);
  }
  userSoftDelete(id: string) {
    alert(id);
    this._userApiService.userSoftDelete(id).subscribe({
      next: (res) => {
        console.log('res:', res);
        this.getUsers();
      },
      error: (e) => console.error('err:', e),
    });
  }
  userHardDelete(id: string) {
    this._userApiService.userHardDelete(id).subscribe({
      next: (res) => {
        console.log('res:', res);
        this.getUsers();
      },
      error: (e) => console.error('err:', e),
    });
  }
}
