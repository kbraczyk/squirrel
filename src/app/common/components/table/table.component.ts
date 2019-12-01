import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { SquirrelDataSource } from './dataSource';
import { HttpClient } from '@angular/common/http';
import { RestService, Resource } from '../../service/rest.service';

@Component({
  selector: 'squirrel-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  public columnsToDisplay: string[] = ['lp', 'name', 'kcal', 'carbo', 'sugar', 'fat', 'protein'];
  public tabs = [
    {value: Resource.carbo, label: 'Węglowodany'},
    {value: Resource.fat, label: 'Tłuszcz'},
    {value: Resource.protein, label: 'Białko'},
    {value: Resource.fruits, label: 'Owoce'},
    {value: Resource.vegetables, label: 'Warzywa'},
  ];

  public dataSource: SquirrelDataSource;

  constructor( private rest: RestService) {
    this.dataSource = new SquirrelDataSource(this.rest);
  }

  ngOnInit() {
  this.dataSource.loadData();
  }

  onLinkClick(event) {
    let activeTabs = this.tabs[event.index];
    this.rest.setResource(activeTabs.value);
    this.dataSource.loadData();
  }
}
