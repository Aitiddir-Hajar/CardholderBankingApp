import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  public form!: FormGroup;
  constructor() { }
  

  ngOnInit(): void {
  }

}
