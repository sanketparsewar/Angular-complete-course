
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  loggedUser:any;
  constructor() {
    const localData = localStorage.getItem('userData');
    if (localData !== null) {
      // convert localSTorage data to object format
      this.loggedUser=JSON.parse(localData)
      console.log(this.loggedUser);
    }
  }
  router=inject(Router);
  onLogOut(){
    localStorage.removeItem('userData');
    this.router.navigateByUrl('login');
  }
}
