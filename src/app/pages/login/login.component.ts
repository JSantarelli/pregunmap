import { Component, OnInit } from '@angular/core';
import { CatalystService } from 'src/app/services/catalyst.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  login = false;

  constructor(
    private catalystService: CatalystService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.catalystService.currentLoginValue.subscribe(login => this.login = login)
  }

  userLogin() {
    if (this.username == "user" && this.password == "pass") {
      this.catalystService.changeLoginValue(true);
      this.router.navigate(['/list-pregunta']);
    }
    console.log(this.login)
  }

}
