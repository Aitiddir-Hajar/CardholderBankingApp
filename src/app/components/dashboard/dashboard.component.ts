import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router'; 
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor( public authservice: AuthService, private router: Router, public observer: BreakpointObserver) { }

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

  goChange() {
    this.router.navigate(['']);
  }

  goHome() {
    this.router.navigate(['']);
  }
  

}
