export class Customer {
  userId?: number;
  userName?: string;
  emailId?: string;
  fullName?: string;

  construcor() {
    this.userId = 0;
    this.userName = '';
    this.emailId = '';
    this.fullName = '';
  }
}
