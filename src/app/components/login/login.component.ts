import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form!: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
