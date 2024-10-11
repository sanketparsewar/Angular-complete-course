import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    EmailId: '',
    Password: '',
  };

  // to make api call we require the http object
  http = inject(HttpClient);

  // we hae to inject router to route to different
  router = inject(Router);

  // this code is called as static login
  // onLogin() {
  //   if (this.userObj.EmailId == 'admin' && this.userObj.Password == '1234') {
  //     alert('Login successful');
  //     localStorage.setItem('userName', this.userObj.EmailId)
  //     this.router.navigateByUrl('add-emp');
  //   } else {
  //     alert('Login failed');
  //   }
  // }

  onLogin() {
    this.http
      .post('https://projectapi.gerasim.in/api/UserApp/login', this.userObj)
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert('Login successful');
            localStorage.setItem('userData', JSON.stringify(res.data));
            this.router.navigateByUrl('add-emp');
          }
          // stng@gmail.com , 98765
          // abcde@gmal.com , 1234
        },
        (error) => {
          alert('Login failed');
          console.error('Error:', error);
        }
      );
  }
}
