import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {

  @Input() card: any
  @Input() index: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.card)
  }

}

