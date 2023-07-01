import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../external-services/contentful/contentful.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  image1url = null;
  image2url = null;
  image3url = null;
  image4url = null;
  image5url = null;
  image6url = null;
  image7url = null;
  image8url = null;
  image9url = null;
  image10url = null;

  imageUrls = []
  images = ['image1','image2','image3','image4','image5','image6','image7','image8','image9','image10',]

  constructor(private content: ContentfulService) { }

  ngOnInit(): void {
    for (let img in this.images) {
      this.getContentfulContent(this.images[img]);
    }    
  }

  getContentfulContent(content) {
    let contentToFind = this.content.getContentId(content)
    this.content.getAsset(contentToFind).subscribe(response => {
      this[content + 'url'] = response.fields.file.url;
    });
  }

  


}
