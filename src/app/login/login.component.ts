import { Component} from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email!: string;
  password: string | undefined;

  constructor(public userService: UsersService) { }

  login() {
    // console.log(this.email);
    // console.log(this.password);

    const user = {email: this.email, password: this.password}
    this.userService.login(user).subscribe(data =>{
      console.log(data);

    })
  }
 

}
