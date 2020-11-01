import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'squirrel-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  item = [1, 2, 3, 4, 5, 6, 7, 8];

}
