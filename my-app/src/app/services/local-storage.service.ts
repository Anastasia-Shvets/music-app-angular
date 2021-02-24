import {Injectable} from '@angular/core'

@Injectable ({
  providedIn: 'root'
})

export class LocalStorageService {
  constructor () { }

  checkAlbumsInLS(albums: any) {
    const checkedAlbums = albums.map((album: any) => {
      const likedAlbums = JSON.parse(localStorage.getItem('likedAlbums') || '[]')
      album.liked = false
      if (likedAlbums.length > 1) {
        const exist = likedAlbums.find((a: { artistId: any; albumName: any; }) => a.artistId === album.artist.mbid && a.albumName === album.name)
        album.liked = exist ? true : album.like
      }
      return album
    });
    return checkedAlbums
  }

  changeLikes(album: any) {
    let likedAlbums = JSON.parse(localStorage.getItem('likedAlbums') || '[]')
    let exist = likedAlbums.find((a: { artistId: any; albumName: any }) => a.artistId === album.artist.mbid && a.albumName === album.name)

    if (exist) {
      likedAlbums = likedAlbums.filter((a: { artistId: any; albumName: any }) => {
        const condition = a.albumName === album.name && a.artistId === album.artist.mbid ? false : true
        return condition
      })
      localStorage.setItem('likedAlbums', JSON.stringify(likedAlbums))
    } else {
      let albumForLocalStorage = {
        artistId: album.artist.mbid,
        albumName: album.name
      }
      likedAlbums.push(albumForLocalStorage)
      localStorage.setItem('likedAlbums', JSON.stringify(likedAlbums))
    }

    return exist ? false : true
  }

  likesCounter() {
    return JSON.parse(localStorage.getItem('likedAlbums') || '[]').length
  }
}
