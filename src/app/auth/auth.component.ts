import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'squirrel-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  constructor(private http: HttpClient) {

  }

  auth() {
    const data = this.form.value;

    this.http.post('http://localhost:3000/auth/login',
      { username: data.username, password: data.password }).subscribe(
        data => console.log(data, 'QWE')
      );
  }


}
