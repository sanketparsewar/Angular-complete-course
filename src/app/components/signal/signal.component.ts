import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  firstName = signal('sanket');
  lastName = signal('parsewar');
  courseName=signal('Angular');
  // here the variable is dependent on two variables that changes their value on click and the value of the vaibels gets updated on ui
  fullName = computed(() => this.firstName() + ' ' + this.lastName());
  cityList = signal(['pune', 'mumbai', 'thane']);
  studentObj = signal({
    name: 'sanket',
    city: 'pune',
  });
  constructor() {
    setTimeout(() => {
      this.courseName.set('Html');
    }, 4000);
  }
  changeFname() {
    this.firstName.set('Harry');
  }
  changeLname() {
    this.lastName.set('Potter');
  }
  addCity() {
    // this.cityList.update(()=>[...this.cityList(),'goa','Delhi','Agra'])
    // or
    this.cityList.set([...this.cityList(), 'goa', 'Delhi', 'Nanded']);
  }
  // here we are chnaging the student object on button click and setting the new value to the student object
  changeStudent() {
    this.studentObj.set({ name: 'Porter', city: 'Hogwarts' });
  }
}
