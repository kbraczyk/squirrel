import { Component } from '@angular/core';

@Component({
  selector: 'squirrel-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent {
  public colorScheme = { domain: ['rgb(209, 144, 255)', 'rgb(0, 0, 0)', 'rgb(230, 81, 0)'] };
  public view = [700, 300];
  public saleData: Array<{ name: string, value: number }> = [
    { name: 'Białka', value: 176 },
    { name: 'Tłuszcze', value: 63 },
    { name: 'Węglowodany', value: 159 },
  ];

  constructor() { }



}
