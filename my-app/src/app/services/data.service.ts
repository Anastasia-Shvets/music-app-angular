import { environment } from './../../environments/environment.prod';
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable ({
  providedIn: 'root'
})

export class DataService {
  constructor ( private http: HttpClient ) { }

  getGenre() {
    return [
      {
        genre: 'rock',
        imgUrl: 'https://i.pinimg.com/originals/5e/6b/8e/5e6b8e783201aac32d66601fa93fb795.png'
      },
      {
        genre: 'electro',
        imgUrl: 'https://ih1.redbubble.net/image.989946561.3650/raf,128x128,075,f,101010:01c5ca27c6.jpg'
      },
      {
        genre: 'hip-hop',
        imgUrl: 'https://i.pinimg.com/originals/af/74/38/af7438537dc9a7b16e44cd9afd85022a.jpg'
      },
      {
        genre: 'pop',
        imgUrl: 'https://cdn62.zvooq.com/pic?type=release&id=6989704&size=200x200&ext=jpg'
      },
      {
        genre: 'r&b',
        imgUrl: 'https://i.pinimg.com/236x/e3/21/4a/e3214a022d518407bfc0b977eaeb69f5--destinys-child-body-shots.jpg'
      },
      {
        genre: 'indie',
        imgUrl: 'https://i.scdn.co/image/358137f08e893c6c136038039b5b8ea1fd7d0e76'
      }
    ]
  }

  getAlbumsByGenre(genre: string) {
    return this.http.get(environment.apiHost + `?method=tag.gettopalbums&tag=${genre}&api_key=${environment.apiKey}&format=json`)
  }

  searchAlbums(searchTag: string) {
    return this.http.get(environment.apiHost + `?method=album.search&album=${searchTag}&api_key=${environment.apiKey}&format=json`)
  }
}

