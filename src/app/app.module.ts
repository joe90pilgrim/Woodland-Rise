import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { FindusComponent } from './findus/findus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FacilitiesTableComponent } from './facilities/facilities-table/facilities-table.component';
import {MatTableModule} from '@angular/material/table';
import { AttractionsCarouselComponent } from './attractions/attractions-carousel/attractions-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ContactusService } from './contactus/contactus.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrivacyNoticeComponent } from './privacynotice/privacynotice.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'gallery', component: GalleryComponent },
  { path: 'findus', component: FindusComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'attractions', component: AttractionsComponent },
  { path: 'privacynotice', component: PrivacyNoticeComponent },
];

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    FacilitiesComponent,
    GalleryComponent,
    AttractionsComponent,
    FindusComponent,
    ContactusComponent,
    FacilitiesTableComponent,
    AttractionsCarouselComponent,
    PrivacyNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule, 
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [ContactusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
