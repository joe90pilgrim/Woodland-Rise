import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { faTwitter,  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ContentfulService } from './external-services/contentful/contentful.service';
import { CookiePopupComponent } from './home/cookie-popup/cookie-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeURL: string;
  bookingLink: string = null;
  menuOpen: boolean;

  constructor(private router: Router, private dialog: MatDialog, private content: ContentfulService, private gtmService: GoogleTagManagerService) {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
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
    this.getContentfulContent('bookingLink');
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
        // console.log(this.activeURL, 'active url');
        this.menuClose();
      }
    });
  }

menuClose() {
  this.checkMobile();
  if (this.isMobile) {
    let x = document.getElementById("menu-list");
    x.style.display = "none";
  }
}

  getContentfulContent(content) {
    let contentToFind = this.content.getContentId(content)
    this.content.getContent(contentToFind).subscribe(response => {
      this[content] = response.fields['text'];
    });
  }

  menuToggle() {
    this.checkMobile();
    if (this.isMobile) {
      let x = document.getElementById("menu-list");
      if (x.style.display === "none" || x.style.display == '' || this.menuOpen == false) {
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

