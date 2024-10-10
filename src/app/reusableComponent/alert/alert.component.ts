import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  // to access this varibale from parent component and assign new value this are made as Input
  @Input() message: string = '';
  @Input() alertType: string = '';
}
