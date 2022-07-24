import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { ContactusService } from './contactus.service';
// import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactUsForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private contactService: ContactusService)
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

  sendFormEmail(){
    const dataToSend = this.contactUsForm.value;
    if (dataToSend) {
      this.contactService.PostMessage(dataToSend)
        .subscribe(response => {
          location.href = 'https://mailthis.to/confirm';
          this.contactUsForm.reset();
        }, error => {
          console.warn(error.responseText)
          console.log({ error })
          })
    }
  }

}
