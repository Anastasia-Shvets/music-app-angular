import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreCardComponent,
    AlbumCardComponent,
    HomePageComponent,
    AlbumsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
