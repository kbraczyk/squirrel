import { Component, OnInit } from '@angular/core';
import { SquirrelDataSource } from './dataSource';
import { RestService, Resource } from '../../service/rest.service';

@Component({
  selector: 'squirrel-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  public columnsToDisplay: string[] = ['name', 'kcal', 'carbo', 'sugar', 'fat', 'protein'];
  public tabs = [
    { value: Resource.carbo, label: 'Węglowodany' },
    { value: Resource.fat, label: 'Tłuszcz' },
    { value: Resource.protein, label: 'Białko' },
    { value: Resource.fruits, label: 'Owoce' },
    { value: Resource.vegetables, label: 'Warzywa' },
  ];

  public dataSource: SquirrelDataSource;

  constructor(private rest: RestService) {
    this.dataSource = new SquirrelDataSource(this.rest);
  }

  ngOnInit() {
    this.rest.setResource(this.tabs[0].value);
    this.dataSource.loadData();
  }

  activeTab(indexTab) {
    this.rest.setResource(this.tabs[indexTab].value);
    this.dataSource.loadData();
  }
}
