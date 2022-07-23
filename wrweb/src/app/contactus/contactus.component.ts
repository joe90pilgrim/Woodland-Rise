import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(private fb: FormBuilder)
   { this.buildForm();}

  ngOnInit(): void {
  }

  buildForm() {
    this.contactUsForm = this.fb.group({
    name: '',
    email: '',
    phone: '',
    message: ''
    });
  }

}
