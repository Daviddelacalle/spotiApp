import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCEIzxPQkoCuCxu3-h6e47_xJ34okPpKsNGDv3GditHPMHU-_-kbiXEwnqQgSEOroVgb6THVTQiZ7XKvK4'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
        .pipe( map ( data => data['albums'].items));
  }

  getArtists(word: string){

    return this.getQuery(`search?q=${word}&type=artist`)          
        .pipe(map (data => data['artists'].items));
  }

  getArtist(id: string){

    return this.getQuery(`artists/${id}`);
            
        // .pipe(map (data => data['artists'].items));
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)         
         .pipe(map (data => data['tracks']));
  }
}
