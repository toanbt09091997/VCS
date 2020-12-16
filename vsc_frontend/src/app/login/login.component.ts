import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserServiceService} from '../pages/services/user-service.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  date: any;
  user: User = new User();

  constructor(
    private userServiceService: UserServiceService,
    private route: Router,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.date = new Date();
  }

  login() {
    this.userServiceService.login(this.user).subscribe(res => {
      this.user = res;
      if (this.user) {
        window.sessionStorage.setItem('token', res.token);
        this.route.navigate(['/pages']);
      } else {
        this.toastrService.error('username or password error')
      }
    });
  }
}
