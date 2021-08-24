import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public form!: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
