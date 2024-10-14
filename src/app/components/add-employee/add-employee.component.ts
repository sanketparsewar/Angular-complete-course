import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

// component decorator
// we use selector to call any component
@Component({
  selector: 'app-add-employee', //unique identifier of this component
  standalone: true, //not dependent on ther files
  imports: [FormsModule,CommonModule],
  // either use file path in templateUrl and give file name or use template and give html code
  templateUrl: './add-employee.component.html',  //html code of this component
  // template: "<h1 class='text-primary'>Hello</h1>", //html code of this component
  // either give file path in styleUrl or direct write css in styles
  styleUrl: './add-employee.component.css'
  // styles: ['.primary{color:red}'],
})
export class AddEmployeeComponent {
  http = inject(HttpClient);
  userList: any[] = [];
  // ngOnInit means when the page is loaded the api is called
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
}
