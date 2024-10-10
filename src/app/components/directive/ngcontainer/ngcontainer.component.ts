import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,TemplateRef, inject } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css',
})
export class NgcontainerComponent {
  http = inject(HttpClient);
  userData: any;

  isDataFetched: boolean = false;
  isContainer: boolean = true;
  // myTemp: TemplateRef<any> | undefined;

  getAllUser() {
    this.isDataFetched = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userData = res;
        this.isDataFetched = false;
      });
  }
}
