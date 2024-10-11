import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    userName: '',
    password: '',
  };
  // we hae to inject router to route to different
  router = inject(Router);
  // this is called as static login 
  onLogin() {
    if (this.userObj.userName == 'admin' && this.userObj.password == '1234') {
      alert('Login successful');
      localStorage.setItem('userName', this.userObj.userName)
      this.router.navigateByUrl('add-emp');
    } else {
      alert('Login failed');
    }
  }
}
