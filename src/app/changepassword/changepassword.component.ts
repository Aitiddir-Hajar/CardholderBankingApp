import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router'; 
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent{

  constructor(public authservice: AuthService, public authService: AuthService, private router: Router, public observer: BreakpointObserver) { }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


}
