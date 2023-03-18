import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../external-services/contentful/contentful.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  welcomeText1: string = null;
  welcomeText2: string = null;
  bookingLink: string = null;

  constructor(private content: ContentfulService) { }


  ngOnInit(): void {
    this.getContentfulContent('welcomeText1');
    this.getContentfulContent('welcomeText2');
    this.getContentfulContent('bookingLink');
  }

  getContentfulContent(content) {
    let contentToFind = this.content.getContentId(content)
    this.content.getContent(contentToFind).subscribe(response => {
      let text = response.fields['text'];
      this[content] = text.replaceAll('\n','<br>');
    });
  }


 
}
