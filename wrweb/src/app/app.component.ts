import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  title = 'wrweb';
  isSticky: boolean = false;
  isMobile: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth < 769) {
      this.isMobile = true;
    }

  }

  getName() {
    console.log(this.router.url);
  }

  navTo() {
    window.scrollTo(0, 250);
  }

  menuToggle() {
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

