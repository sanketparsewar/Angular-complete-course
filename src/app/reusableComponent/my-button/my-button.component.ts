import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css',
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  // to make know to the parent component that we have clicked this button we have to add @Output and EventEmitter
  // onBtnClick is name of output 
  @Output() onBtnClick=new EventEmitter<any>
  onClick() {
    this.onBtnClick.emit('Hii from child component')
  }

  // in parent component .html file, input is in [] and output is like event so it is wrapped in ()
  //here we have to write (onBtnClick) in parent component and pass the function
}
