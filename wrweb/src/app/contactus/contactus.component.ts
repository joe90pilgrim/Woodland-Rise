import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactUsForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder)
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
