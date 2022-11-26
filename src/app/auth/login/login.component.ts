import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async login() {
    if (this.loginForm.valid) {
      try {
        const response = await this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/places');
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async loginWithGoogle() {
    try {
      const response = await this.authService.loginWithGoogle();
      this.router.navigateByUrl('/places')
      console.log(response);
    } catch (err) {
      console.log(err)
    }
  }

}
