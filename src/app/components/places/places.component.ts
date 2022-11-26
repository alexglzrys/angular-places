import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor(private authServce: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async logout() {
    try {
      await this.authServce.logout();
      this.router.navigateByUrl('/login');
    } catch (err) {
      console.log(err);
    }
  }

}
