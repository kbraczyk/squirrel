import { AfterViewInit, Component, HostListener } from '@angular/core';
import { DemandKcalService } from '@common/service/demand-kcal.service';

@Component({
  selector: 'squirrel-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss']
})
export class DemandComponent implements AfterViewInit {
  public demand$ = this.kcalService.userDemand$;
  public result;
  public colorScheme = { domain: ['rgb(209, 144, 255)', 'rgb(0, 0, 0)', 'rgb(230, 81, 0)'] };
  public view = [0, 0];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 700) {
      this.view = [300, 0];
    } else if (event.target.innerWidth > 1000 && event.target.innerWidth < 1200) {
      this.view = [650, 0];
    } else if (event.target.innerWidth < 1200) {
      this.view = [600, 0];
    }
  }

  constructor(private kcalService: DemandKcalService) {
    this.demand$.subscribe(data => this.result = this.mapData(data));
  }

  ngAfterViewInit() {
    document.getElementById('progresProtein').style.width = '32%';
    document.getElementById('progresFat').style.width = '22%';
    document.getElementById('progresCarbs').style.width = '45%';

  }

  mapData(data) {
    return [
      { name: 'Białka', value: data.protein },
      { name: 'Tłuszcze', value: data.fat },
      { name: 'Węglowoadny', value: data.carbs }];
  }
}
