import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-recipes-user',
  templateUrl: './recipes-user.component.html',
  styleUrls: ['./recipes-user.component.scss']
})
export class RecipesUserComponent implements OnInit {
  public item = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
