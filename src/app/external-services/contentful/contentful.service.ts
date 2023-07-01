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

  getAsset(contentId) {
    const promise = this.client.getAsset(contentId);
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
      case 'bookingLink':
        contentId = "6WsVV03eiDisab5Zsh76UZ"
        break;
      case 'image1':
        contentId = '5Tt0dFb0bv3hh43RIGB7nj'
        break;
      case 'image2':
        contentId = '7dz3aItlOqDlm3Hs0j8AIa'
        break;
      case 'image3':
        contentId = '4WoIpvvNWOhacz9ukmhcsT'
        break;
      case 'image4':
        contentId = '3PaJ5AaE0zVsZwgH9Hzi7d'
        break;
      case 'image5':
        contentId = '701a7zcgRfRulEXEQmPgqI'
        break;
      case 'image6':
        contentId = '6TMxDdO5U90hgbfod6wCUO'
        break;
      case 'image7':
        contentId = '2OijwX6Zdrrr4Q0c9Cr4Ml'
        break;
      case 'image8':
        contentId = '55BM4nrFvXhQfDsX0NVDRS'
        break;
      case 'image9':
          contentId = '5Lln0Z5w3gcIIQ5sZwq4tG'
          break;
      case 'image10':
        contentId = '4cURafhsaQLC8PfG6hTYuG'
        break;
    }
    return contentId;
  }
}