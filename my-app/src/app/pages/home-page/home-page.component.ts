import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  genreCards: any = [];

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.genreCards = this.dataService.getGenre()
    console.log(this.genreCards)
  }

}
