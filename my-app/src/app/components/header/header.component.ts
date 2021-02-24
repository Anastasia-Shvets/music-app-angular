import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() likesCounter: any
  @Output() searchAlbums: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchAlbumsByTag(event: any) {
    const value = event.target.value
    this.searchAlbums.emit(value)
  }
}
