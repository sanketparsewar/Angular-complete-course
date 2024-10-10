import { Component,OnInit,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css',
})
export class LifecycleEventComponent implements OnInit,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  message: string = '';
  constructor() {
    console.log('Constructor');
  }
  ngOnInit(){
    console.log('ngOnInit')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
