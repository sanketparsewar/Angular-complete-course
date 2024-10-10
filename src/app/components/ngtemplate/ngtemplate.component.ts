import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css',
})
export class NgtemplateComponent {
  isUserLoggedIn: boolean = false;
  loggerUserName: string = 'sanket';
}
