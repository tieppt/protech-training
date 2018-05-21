import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  loading = false;

  userForm: FormGroup;

  postSuccess = false;
  postResponse: any;

  get nameCtrl() {
    return this.userForm.get('name');
  }

  get usernameCtrl() {
    return this.userForm.get('username');
  }

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email]
    });
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(1000)
      )
      .subscribe((next: any[]) => {
        this.userList = next;
      }, error => {
        console.log(error);
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  gotoUserDetail(userId) {
    this.router.navigate(['/users/', userId]);
  }

  onSubmit() {
    console.log(this.userForm.value);

    if (this.userForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/users',
        this.userForm.value
      ).subscribe(res => {
        this.postSuccess = true;
        this.postResponse = res;
      }, err => this.postSuccess = false);

    }
  }

}
