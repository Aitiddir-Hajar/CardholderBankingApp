import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form!: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
