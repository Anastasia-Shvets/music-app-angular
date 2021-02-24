import { LocalStorageService } from './../../services/local-storage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})

export class AlbumCardComponent implements OnInit {

  @Input() album: any
  @Output() changeLikesCounter: EventEmitter<any> = new EventEmitter();
  image: string = ''
  lCounter: any

  constructor (
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.image = this.album.image[3]['#text']
    // console.log('artist',this.album.artist.name)
  }

  changeLikeStatus() {
    this.album.liked = this.localStorageService.changeLikes(this.album)
    this.lCounter = this.localStorageService.likesCounter()
    this.changeLikesCounter.emit(this.lCounter)
  }
}
