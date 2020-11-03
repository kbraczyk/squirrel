import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SquirrelDataSource } from '@common/components/table/dataSource';
import { RestService, Resource } from '@common/service/rest.service';
import { MatSort, MatPaginator, MatTable } from '@angular/material';

@Component({
  selector: 'squirrel-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})

export class ProductTableComponent implements OnInit, AfterViewInit {

  public title: string = 'Polecane produkty';
  public subTitle: string = 'Lista pokazuję produkt, które warto włączyć do swojej diety';

  public columnsToDisplay: string[] = ['name', 'energy', 'carbo', 'sugar', 'fat', 'protein'];

  public tabs = [
    { value: Resource.carbo, label: 'Węglowodany', icon: '../../assets/icon/carbohydrates.svg' },
    { value: Resource.fat, label: 'Tłuszcz', icon: '../../assets/icon/fat.svg' },
    { value: Resource.protein, label: 'Białko', icon: '../../assets/icon/protein.svg' },
    { value: Resource.fruits, label: 'Owoce', icon: '../../assets/icon/frutis.svg' },
    { value: Resource.vegetables, label: 'Warzywa', icon: '../../assets/icon/vegetable.svg' },
  ];

  public dataSource: SquirrelDataSource;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private rest: RestService) {
    this.dataSource = new SquirrelDataSource(this.rest);
  }

  ngOnInit() {
    this.rest.setResource(this.tabs[0].value);
    this.dataSource.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  activeTab(indexTab) {
    this.rest.setResource(this.tabs[indexTab].value);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
    this.dataSource.loadData(null, null);
  }

}

