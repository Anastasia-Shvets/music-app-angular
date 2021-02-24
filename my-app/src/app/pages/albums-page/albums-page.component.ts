import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from './../../services/data.service';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  genre: any
  albums: any[] = []
  albumsByGenre: any[] = []
  foundAlbumsBySearch: any[] = []
  likesCounter: number = 0

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private localStorageService: LocalStorageService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.genre = params.genre
    })
    this.dataService.getAlbumsByGenre(this.genre).subscribe((response) => {
      this.albumsByGenre = this.localStorageService.checkAlbumsInLS((response as any).albums.album)
      this.albums = this.albumsByGenre
      this.likesCounter = this.localStorageService.likesCounter()
    })
  }

  updateLikesCounter(likes: any) {
    this.likesCounter = likes
  }

  searchAlbumsByTag(searchTag: any) {
    this.dataService.searchAlbums(searchTag).subscribe(
      response => {
        console.log('resp',response)
        this.foundAlbumsBySearch = this.localStorageService.checkAlbumsInLS((response as any).results.albummatches.album)
        const mapedAlbums = this.foundAlbumsBySearch.map((a: any) => {
          return {
            name: a.name,
            url: a.url,
            image: a.image,
            artist: {
              name: a.artist,
              mbid: a.mbid,
            }
          }
        })
        this.albums = mapedAlbums
        this.likesCounter = this.localStorageService.likesCounter()
      },
      error => {
        this.albums = this.albumsByGenre
      }
    )
  }
}
