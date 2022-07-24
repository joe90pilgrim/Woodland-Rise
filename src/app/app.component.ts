import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faTwitter,  faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeURL: string;

  constructor(private router: Router) {
  }

  title = 'Woodland Rise Camping and Caravan Park';
  isSticky: boolean = false;
  isMobile: boolean = false;
  faFacebook = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  

  ngOnInit(): void {
    this.checkMobile();
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
    window.scrollTo(0, 250);
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
    this.isSticky = window.pageYOffset >= 525;
  }
}

