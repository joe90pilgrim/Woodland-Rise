import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions-carousel',
  templateUrl: './attractions-carousel.component.html',
  styleUrls: ['./attractions-carousel.component.scss']
})
export class AttractionsCarouselComponent implements OnInit {

  constructor() { }

attractions: any;
strtNo: number = 1;
endNo: number = 3;
show: boolean = true;

  ngOnInit(): void {

    if (window.screen.width < 769) {
      this.show = false;
    };

    this.attractions = [
      {
      id: 1,
      title: 'Gwili Steam Railway',
      link: 'http://www.gwili-railway.co.uk/',
      text: 'The Gwili Steam Railway company runs a  service from Bronwydd along a preserved section of the old Carmarthen-Aberystwyth line. (About 6 miles/14 minutes drive from Woodland Rise)'
    },{
      id: 2,
      title: 'Dylan Thomas Boathouse',
      link: 'https://www.dylanthomasboathouse.com/',
      text: 'Why not visit the famous Dylan Thomas Boathouse in Laugharne? The place where the poet spent the last four years of his life, writing poems such as ‘Over Sir John’s Hill’. Complete with panoramic views of the Taf estuary and with The Boathouse Tearoom close by. (About 15 miles/35 minutes drive from Woodland Rise)'
    },
    {
      id: 3,
      title: 'Pembrey Country Park',
      link: 'http://www.discovercarmarthenshire.com/parks/',
      text: 'Of all the country parks in Carmarthenshire, Pembrey has the most to do for all the family (even the dog!): 10 miles of sandy beach, 550 acres of woodland, toboggan run, dry ski slope, laser tag, cafe, and much more. (About 22 miles/42 minutes drive from Woodland Rise)'
    },
    {
      id: 4,
      title: 'Kidwelly Castle',
      link: 'http://cadw.wales.gov.uk/daysout/kidwellycastle/?lang=en',
      text: 'One of Cadw’s premier castles. Originally a wooden Norman keep, it was rebuilt in the 13th century in Welsh stone. Read about the battles between Maurice de Londres and Princess Gwenllian, and Owain Glyndwr’s attempts to destroy it. This castle of concentric design is one of Wales’ greatest. A must see for history lovers. (About 17 miles/33 minutes drive from Woodland Rise)'
    },{
      id: 5,
      title: 'Museum of Speed',
      link: 'http://www.carmarthenshire.gov.uk/english/education/museums/museumofspeed/',
      text: 'The Sands of Speed in Pendine has an illustrious history. J.G. Parry-Thomas broke the world land speed record in 1926 driving the famous ‘Babs’. The car is now fully restored after 42 years buried underground! There are many motorbikes also on show. Petrol heads will love this place. (About 22 miles/40 minutes drive from Woodland Rise)'
    },
    {
      id: 6,
      title: 'The National Wool Museum',
      link: 'http://www.museumwales.ac.uk/wool/',
      text: 'The Cambrian Mills sent woollen blankets, stockings, shirts and shawls all around the world. Learn how these items are made and follow the journey from fleece to fabric. Visit the restored mills and historic machinery. Free all year round! (About 10 miles/21 minutes from Woodland Rise)'
    },
  ]
  }

  carouselItemUpdate(dir){
    if (dir = "fwd") {
      if (this.endNo>=this.attractions.length){
        this.strtNo = 1;
        this.endNo = 3;
      } else {
        this.strtNo = this.strtNo + 3;
        this.endNo = this.endNo + 3;
      }
    } else {
      if (this.strtNo<=this.attractions.length){
        this.strtNo = 1;
        this.endNo = 3;
      } else {
        this.strtNo = this.strtNo - 3;
        this.endNo = this.endNo - 3;
      }
    }
}

}
