import { Component, OnInit, ViewChild } from '@angular/core';
import { SquirrelDataSource, rowsAnimation } from '../common/components/table/dataSource';
import { RestService, Resource } from '../common/service/rest.service';
import { MatSort } from '@angular/material';
import { trigger, transition, style, sequence, animate, state } from '@angular/animations';

@Component({
  selector: 'squirrel-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  animations: []
  })

export class ProductTableComponent implements OnInit {

  public columnsToDisplay: string[] = ['name', 'energy', 'carbo', 'sugar', 'fat', 'protein'];

  public tabs = [
    { value: Resource.carbo, label: 'Węglowodany' },
    { value: Resource.fat, label: 'Tłuszcz' },
    { value: Resource.protein, label: 'Białko' },
    { value: Resource.fruits, label: 'Owoce' },
    { value: Resource.vegetables, label: 'Warzywa' },
  ];

  public dataSource: SquirrelDataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private rest: RestService) {
    this.dataSource = new SquirrelDataSource(this.rest);
    this.dataSource.sort = this.sort;
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