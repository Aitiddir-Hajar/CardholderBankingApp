import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form!: FormGroup;

  constructor() { }


  ngOnInit(): void {
  }


}
