import { Component, OnInit, ViewChild } from '@angular/core';
import { SquirrelDataSource } from '../common/components/table/dataSource';
import { RestService, Resource } from '../common/service/rest.service';
import { MatSort, MatPaginator } from '@angular/material';
import { trigger, transition, style, sequence, animate, state } from '@angular/animations';

@Component({
  selector: 'squirrel-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})

export class ProductTableComponent implements OnInit {

  title: string = 'Polecane produkty';
  subTitle: string = 'Lista pokazuję produkt, które warto włączyć do swojej diety';

  public columnsToDisplay: string[] = ['name', 'energy', 'carbo', 'sugar', 'fat', 'protein'];

  public tabs = [
    { value: Resource.carbo, label: 'Węglowodany', icon: '../../assets/icon/carbohydrates.svg' },
    { value: Resource.fat, label: 'Tłuszcz', icon: '../../assets/icon/fat.svg' },
    { value: Resource.protein, label: 'Białko', icon: '../../assets/icon/protein.svg' },
    { value: Resource.fruits, label: 'Owoce', icon: '../../assets/icon/frutis.svg' },
    { value: Resource.vegetables, label: 'Warzywa', icon: '../../assets/icon/vegetable.svg'},
  ];

  public dataSource: SquirrelDataSource;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private rest: RestService) {
    this.dataSource = new SquirrelDataSource(this.rest);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

