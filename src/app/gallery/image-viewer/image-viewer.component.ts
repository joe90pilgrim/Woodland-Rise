import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/external-services/contentful/contentful.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  image: any;
  imageUrl: any;
  nextUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private content: ContentfulService,  private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.image=this.activatedRoute.snapshot.paramMap.get("url");
    this.getContentfulContent(this.image);
    this.nextUrl = this.getNext(this.image)
  }

  getContentfulContent(content) {
    let contentToFind = this.content.getContentId(content)
    this.content.getAsset(contentToFind).subscribe(response => {
      this.imageUrl = response.fields.file.url;
    });
  }

  getNext(str) {
    let next = parseInt(str.slice(-1)) + 1;
    if (next > 10) {
      next = 1;
    }
    return 'image' + next;
  }

}
