import { Component, OnInit } from '@angular/core';
import { faTwitter,  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor() { }
  faFacebook = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  
  

  ngOnInit(): void {
  }

}
