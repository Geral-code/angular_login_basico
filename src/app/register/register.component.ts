import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!:string;

  constructor(public userService: UsersService) { }

  register() {
    const user = {
      email: this.email, 
      password: this.password, 
      passwordError: this.passwordError 
    }
    this.userService.register(user).subscribe(data => {
      console.log(data);
    })




  }

 
}
