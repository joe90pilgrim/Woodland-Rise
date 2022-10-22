import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as marked from 'marked';
@Injectable()
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })
  constructor() { }
  // console logs a response for debugging
  logContent(contentId) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry) )
  }

  // retrieves content mapped to its data fields
  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    var observableFromPromise = fromPromise(promise);
    return observableFromPromise;
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md)
  }

  getContentId(pageName) {
    let contentId;
    switch (pageName) {
      case 'welcomeText1':
        contentId = "5BaiD7UY5A7orpNlhK1pOT";
        break;
      case 'welcomeText2':
        contentId = "qlldoArrMSDd4zK5IvQVA";
        break;
    }
    return contentId;
  }
}