import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { faTwitter,  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { CookiePopupComponent } from './home/cookie-popup/cookie-popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeURL: string;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  title = 'Woodland Rise Camping and Caravan Park';
  isSticky: boolean = false;
  isMobile: boolean = false;
  faFacebook = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  

  ngOnInit(): void {
    this.checkMobile();
    this.menuToggle();
    this.openPopUp();
    this.activatedNavLink();
  }

  checkMobile() {
    if (window.innerWidth < 769) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  getName() {
    console.log(this.router.url);
  }

  navTo() {
    // window.scrollTo(0, 250);
  }

  activatedNavLink() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.activeURL = e.url;
        console.log(this.activeURL, 'active url');
        this.menuToggle();
      }
    });
  }


  menuToggle() {
    this.checkMobile();
    if (this.isMobile) {
      let x = document.getElementById("menu-list");
      if (x.style.display === "none" || x.style.display == '') {
        x.style.paddingTop = "30px";
        x.style.paddingBottom = "30px";
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 125;
    this.checkMobile();
  }

  getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
}

  openPopUp() {
    const cookieCheck = this.getCookie('consent');
    console.log(cookieCheck, 'cookies')
    if (!cookieCheck) {
      let dialogRef = this.dialog.open(CookiePopupComponent, {
        height: '400px',
        width: '600px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
      var date = new Date().toDateString()
      console.log(date);
      document.cookie = "consent=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Strict";
        }
      )
    }
  }
}

