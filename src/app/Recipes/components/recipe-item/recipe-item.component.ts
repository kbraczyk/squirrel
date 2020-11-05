import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  public isFavorite: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
