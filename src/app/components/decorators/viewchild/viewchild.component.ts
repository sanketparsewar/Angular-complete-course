import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css',
})
// if we want to access any viewchild on page load then we use ngAfterViewInit
export class ViewchildComponent {
  // here ?denotes optional
  @ViewChild('txt') textBox?: ElementRef;
  ngAfterViewInit() : void{
    const vale = this.textBox?.nativeElement.vale;
    console.log(vale); // will print the value of text box if it is defined and exists in the DOM. If not, it will print undefined.
  }
}





