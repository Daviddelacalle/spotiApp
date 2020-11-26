import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { 
  }

  
  ngOnInit(): void {
  }

  buscar(word: string){
    this.loading = true;
    console.log(word);
    this.spotify.getArtists( word )
      .subscribe( (data: any) =>{
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
    
  }

}
